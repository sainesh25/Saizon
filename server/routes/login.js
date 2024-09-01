const { body } = require('express-validator');
const login = require('../controller/loginController');
const loginRouter = require('express').Router();

loginRouter.post('/login',
    body('email').isEmail().withMessage('Email is invalid'),
    login.loginUser);

module.exports = loginRouter;