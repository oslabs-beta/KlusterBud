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
//gets names of replica sets from prometheus server, sends them to front end in an array
app.get('/loadRS', RSController.fetch, (req, res) => {
    res.status(200).json({result: res.locals.replicaSets})
})

app.get('/query/:string', queryController.fetch, queryController.sort, (req, res) => {
    res.status(200).json({ result: res.locals.pod, median: res.locals.medianSec, abnormalNodeFound: res.locals.errorFound })
})
