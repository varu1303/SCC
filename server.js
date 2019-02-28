const express = require('express');
const path = require('path');

const app = express();
const db = require('./mongo/_connect');
const { port } = require('./config/config');

const admin = require('./routes/adminRoute');
const mod = require('./routes/modRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, '/client/base_interface')));
app.use('/mod', express.static(path.join(__dirname, '/client/mod_interface')));
app.use('/services',express.static(path.join(__dirname, '/client/services_interface')));
app.use('/admin',express.static(path.join(__dirname, '/client/admin_interface')));
app.use('/app', express.static(path.join(__dirname, '/client/app_interface')));
app.use('/common', express.static(path.join(__dirname, '/client/common_assets')));

// ROUTES!
app.use('/admin', admin);
app.use('/mod', mod);


// If the connection throws an error
db.on('error', console.error.bind(console, 'connection error:'));
// When the connection is disconnected
db.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
    process.exit()
});

db.once('open', function() {
    app.listen(port || '8000', () => {
        console.log(`Listening at ${port || '8000'}!`);
    })
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
    db.close(function () { 
        console.log('Mongoose default connection disconnected through app termination'); 
        process.exit(0); 
    }); 
}); 
