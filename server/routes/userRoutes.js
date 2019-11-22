const express = require('express');
const router = express.Router();
const {signup} = require('../controllers/signup')
//validation
const{runValidation} = require('../validators/')
const{userSignupValidator} = require('../validators/auth')
//declaration of User from schema
let User = require('../models/UserModel');
//pull data
router.get('/signup', function(req, res){
    res.send({type: 'register'});
});
//submit data
router.post('/signup',userSignupValidator,runValidation,signup)

module.exports = router;