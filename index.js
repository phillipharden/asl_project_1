const express = require('express');
const app = express();

// GET / HTTP/1.1
app.get('/', (request, response) => {
    response.send('Home Page! GET...')
})

app.post('/', (request, response) => {
    response.send('Home Page! POST...')
})

// GET /products/nike-large-white-show HTTP/1.1
// the : allows to create dynamic data
app.get('/products/:productName', (request, response) => {
    response.send('Product Page! Product name: ' + request.params.productName)
})

app.get('/products', (request, response) => {
    response.send('All products...')
})

app.post('/products', (request, response) => {
    response.send('Created a new product...')
})

app.post('/products/:urlId', (request, response) => {
    response.send('Updated a product with an id of '+ request.params.urlId +'...')
})

app.listen(3000) // http://localhost:3000/ in the web browser