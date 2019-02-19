const express = require('express');
const path = require('path');

const app = express();
const db = require('./mongo/connect');

app.use(express.static(path.join(__dirname, '/client')));


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen('3000', () => {
        console.log('Listening at 3000!');
    })
});

