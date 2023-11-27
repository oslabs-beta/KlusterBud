const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// const queryController = require('./controllers/queryController');

const PORT = 3000;
const app = express();



app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));

app.use(express.json());
app.use(express.urlencoded())

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.text());

app.use('/', express.static(path.resolve(__dirname, '../client')))

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})

// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../client/app.jsx'));
// })

app.get('/query/:string', (req, res) => {
    console.log('/QUERY ROUTE IS RUNNING', req.params.string)
    fetch('http://localhost:9090/api/v1/query?query=' + req.params.string)
    // .then(data => data.json())
    // .then(data => console.log(data.data.result))
    // .then(data => res.status(200).json(data))
    .then(response => response.json())
    .then(data => {
        console.log(data.data.result);
        // Send only the data.data.result part to the client
        res.status(200).json({ result: data.data.result });
    })
    
})

// app.get('/query', queryController.fetch, (req, res) => {
//     res.status(200).json(res.locals.data);
// })