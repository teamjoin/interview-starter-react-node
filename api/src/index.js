'use strict';
const express = require('express');
const { json } = require('body-parser');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = 'localhost';

// App
const app = express();

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(json());

// API
app.get('/api', (req, res) => {
    let data = {
        message: 'Hello world !',
    };
    res.send(JSON.stringify(data, null, 2));
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
