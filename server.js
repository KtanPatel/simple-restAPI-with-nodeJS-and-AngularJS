var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    api = require('./routes/api'),
    app = express(),
    port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/product');

app
    .use(express.static('./public'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}))
    .use('/api',api)
    .listen(port,ip,function(){
        console.log('server listening on port %d', port);
    });