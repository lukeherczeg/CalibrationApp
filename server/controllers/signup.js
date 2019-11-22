
let User = require('../models/UserModel');

exports.signup = (req,res) => {
    const {email,password} =req.body
    User.findOne({email:req.body.email}).exec((err,user)=>
    {
        if(user)
        {
            return res.status(400).json({
                error: 'Email is Taken'
            })
        }
    let newUser =  new User({
        email:email,
        password:password
    });
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
