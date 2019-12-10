let User = require('../models/UserModel');
const shortId = require('shortid');
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

// This file contains outcomes of user authentication checking

exports.signup = (req,res) => {
    User.findOne({email:req.body.email}).exec((err,user)=>
    {
        if(user)
        {
            return res.status(400).json({
                error: 'Email is taken.'
            })
        }
        const {email,password} =req.body

        // Create profile id for future authentication, profile page, etc.
        let randstring = shortId.generate();
        let profile = '/profile/'+randstring;
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
    // Check user existence
    User.findOne({email}).exec((err,user)=>
    {
        if(err || !user)
        {
            return res.status(400).json({
                error: 'That email does not exist! Please register.'
            });
        }
    // Authenticate
    if(!user.authenticate(password)){
        return res.status(400).json({
            error: 'Email and password does not match.'
        });
    }

    // Generate a token and send to client
    const token = jwt.sign({_id: user._id},process.env.USER_SECRET, {expiresIn: '1d'})

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
    secret: process.env.USER_SECRET
});
