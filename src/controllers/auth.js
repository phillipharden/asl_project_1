const express = require('express')
const authRouter = express.Router()
const axios = require('axios')
const queryString = require('querystring')
const { LoginToken } = require('../models/index')

const client_id = "5c7e7b4931784167cbff";
const client_secret = "9e20e364a191c8338d0a90db33214b4ff639f075";

authRouter.get("/login", (req, res) => {
  res.render('auth/login')
})
// http://localhost:3000/auth/callback
authRouter.get('/callback', async (req, res) => {
  const { code } = req.query
  const response = await axios.post('https://github.com/login/oauth/access_token', {
    code,
    client_id,
    client_secret
  })
  const { access_token } = queryString.parse(response.data)
  req.session.access_token = access_token
  const loginToken = await LoginToken.create({ token: access_token })
  res.redirect('http://localhost:4000?token=' + access_token)
})

authRouter.get('/token', async (req, res) => {
  console.log("/token");
  const token = await LoginToken.findOne({where: {
    token: req.headers.token
  }})
  if (token) {
    req.session.access_token = req.headers.token
    res.json(token)
  } else {
    res.json({ token: false })
  }
})

module.exports = authRouter