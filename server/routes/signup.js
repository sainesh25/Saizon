const { body } = require('express-validator');
const signup = require('../controller/userController');
const userRouter = require('express').Router();

userRouter.post('/signup',
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 8 }).withMessage('Password must be atleast 8 characters'),
    signup.signupUser);

module.exports = userRouter;