const express = require('express');
const app = express();

// GET / HTTP/1.1
app.get('/', (request, response) => {
    response.send('Home Page! GET...')
})

app.post('/', (request, response) => {
    response.send('Home Page! POST...')
})

app.listen(3000) // http://localhost:3000/ in the web browser