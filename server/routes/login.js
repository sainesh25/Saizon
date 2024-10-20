import { body } from 'express-validator';
import login from '../controller/loginController.js';
import express from 'express'
const loginRouter = express.Router();
loginRouter.post('/login',
    body('email').isEmail().withMessage('Email is invalid'),
    login.loginUser);

export default loginRouter;