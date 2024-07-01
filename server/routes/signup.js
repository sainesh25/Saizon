const signup = require('../controller/userController');
const userRouter = require('express').Router();

userRouter.post('/signup', signup.signupUser);

module.exports = userRouter;