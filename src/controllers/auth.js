const express = require("express");
const router = express.Router();
const request = require("request"); // allows me to make curl/HTTP requests to another server from nodejs
const querystring = require("querystring");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/callback", async (req, res) => {
  const { code } = req.query;
  await request(
    {
      uri: "https://github.com/login/oauth/access_token",
      qs: {
        client_id: "5c7e7b4931784167cbff",
        client_secret: "9e20e364a191c8338d0a90db33214b4ff639f075",
        code,
      },
    },
    async (error, response, body) => {
      const { access_token } = querystring.parse(body);
      // curl -H "Authorization: token 1234example5678" https://api.github.com/user
      await request(
        {
          uri: "https://api.github.com/user",
          headers: {
            Authorization: `token ${access_token}`,
            "User-Agent": "Mozilla/5.0", //this is a lie
          },
        },
        async (error, response, body) => {
          const data = querystring.parse(body);
          res.json(data);
        }
      );
    }
  );
});

module.exports = router;
