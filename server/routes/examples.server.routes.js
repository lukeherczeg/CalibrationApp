//const examples = require('../controllers/examples.server.controller.js'),
//    express = require('express'),
//    router = express.Router()
//
//router.route('/')
//  .get(examples.hello);
//
//module.exports = router;

var express = require('express')
var app = express()

app.get('/', function (req, res)  {
  res.send('Hello World!')
})
