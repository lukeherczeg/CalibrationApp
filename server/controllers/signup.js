
let User = require('../models/UserModel');
const shortId = require('shortid');
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const config = require('../config/config')

exports.signup = (req,res) => {
    User.findOne({email:req.body.email}).exec((err,user)=>
    {
        if(user)
        {
            return res.status(400).json({
                error: 'Email is Taken'
            })
        }
        const {email,password} =req.body
        let randstring = shortId.generate();
        let profile = config.URL+'profile/'+randstring;
    let newUser =  new User({email,password,profile});
    newUser.save((err,success)=>{

        if(err)
        {
        console.log(err);
        return;
        }
        else
        {
            res.send({message: 'Signup Success'});
        }
    })
})
};

exports.signin=(req,res) =>
{
    const{email, password} =req.body;
    //check user existence
    User.findOne({email}).exec((err,user)=>
    {
        if(err || !user)
        {
            return res.status(400).json({
                error: 'That email does not exist! Please register.'
            });
        }
    //authenticate
    if(!user.authenticate(password)){
        return res.status(400).json({
            error: 'Email and password does not match.'
        });
    }

    //generate a token and send to client
    const token = jwt.sign({_id: user._id},config.SECRET, {expiresIn: '1d'})

    res.cookie('token', token, {expiresIn: '1d'})
    const {_id, profile, email} = user
    return res.json({token, user: {_id, email,profile}})
});
};

exports.signout = (req,res) =>
{
    res.clearCookie('token');
     res.json({message: 'Signout Completed'});
};

exports.requireSignin = expressJwt({
    secret: config.SECRET
});
