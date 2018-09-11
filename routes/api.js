var express = require('express'),
    router  = express.Router();
var Product  = require('../models/product');

Product.methods(['get','post','put','delete']);
Product.register(router,'/product');

module.exports = router;