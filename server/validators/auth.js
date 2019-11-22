const {check} = require('express-validator')

exports.userSignupValidator = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('Must be a Valid Email Address'),
    check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters')
]

exports.userSigninValidator = [
    check('email')
    .not()
    .isEmpty()
    .withMessage('Must be a Valid Email Address'),
check('password')
    .isLength({min: 6})
    .withMessage('Password must be at least 6 characters')
]