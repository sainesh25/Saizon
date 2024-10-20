import { validationResult } from 'express-validator';
import JWT from 'jsonwebtoken';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';

const loginUser = async (req, res) => {
    try {
        const errors = validationResult(req);

        // Check if validation errors exist
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        console.log('user from db', user);

        // Check if user exists
        if (!user) {
            return res.status(401).json({
                message: 'Invalid Credentials'
            });
        }

        const isPassword = await bcrypt.compare(password, user.password);
        // Check if password is correct
        if (!isPassword) {
            return res.status(401).json({
                message: 'Invalid Credentials'
            });
        }

        // Generate token and send response
        const token = JWT.sign({ email }, process.env.JWT_SECRET_KEY);
        res.status(200).json({
            message: 'Logged In Successfully',
            token
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error occurred',
        });
    }
}

export default { loginUser };
