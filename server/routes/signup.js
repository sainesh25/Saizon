import { body } from 'express-validator';
import signup from '../controller/userController.js';
import express from 'express';

const userRouter = express.Router();

userRouter.post('/signup',
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 8 }).withMessage('Password must be atleast 8 characters'),
    signup.signupUser);

export default userRouter;