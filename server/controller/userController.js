import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import JWT from 'jsonwebtoken';

const signupUser = async (req, res) => {
    //  console.log(req.headers);
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        const isMatch = await bcrypt.hash(password, 10);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), data: null });
        }
        // console.log('user', user);

        if (user) {
            return res.status(400).json(
                {
                    errors: [{
                        msg: 'Email in use'
                    }],
                    data: null,
                }
            )
        } else {
            const newUser = await User.create({ name, email, password: isMatch });
            res.status(200).send({ message: 'User added successfully' });
            // console.log(newUser);
            const token = JWT.sign({ email, name }, process.env.JWT_SECRET_KEY);
            // console.log(token);

        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default { signupUser }