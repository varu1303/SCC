const express = require('express');
const path = require('path');

const app = express();
const db = require('./mongo/connect');
const { port } = require('./config/config');

const admin = require('./routes/adminRoute');
const mod = require('./routes/modRoute');

app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, '/.base_interface')));
app.use('/mod', express.static(path.join(__dirname, '/.mod_interface')));
app.use('/services',express.static(path.join(__dirname, '/.services_interface')));
app.use('/app', express.static(path.join(__dirname, '/client')));

// ROUTES!
app.use('/admin', admin);
app.use('/mod', mod);


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(port || '8000', () => {
        console.log(`Listening at ${port || '8000'}!`);
    })
});
