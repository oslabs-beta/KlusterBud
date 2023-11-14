const path = require('path');
const express = require('express');

const port = 3000;
const app = express();

app.listen(port);

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})