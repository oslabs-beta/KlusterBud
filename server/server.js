const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const queryController = require('./controller/queryController')
const RSController = require('./controller/RSController')

// const queryController = require('./controllers/queryController');

const PORT = 3000;
const app = express();



app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));

app.use(express.json());
app.use(express.urlencoded())

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.text());

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.get('/watchRS', (req, res) => {
    //also grab the specific name of the replica set we are watching from params or smthn
    res.status(200).json({result: {
        anomaly: true,
        nodeID: "destroy-prod-86568647b5-7w5l2"
    }})
})

app.get('/loadRS', RSController.fetch, (req, res) => {
    res.status(200).json({result: res.locals.replicaSets})
})

app.get('/query/:string', queryController.fetch, queryController.sort, (req, res) => {
    res.status(200).json({ result: res.locals.pod })
})

// app.get('/query', queryController.fetch, (req, res) => {
//     res.status(200).json(res.locals.data);
// })