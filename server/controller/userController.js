const User = require('../models/user');
var bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const signupUser = async (req, res) => {
    //  console.log(req.headers);
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        const hashedPassword = await bcrypt.hash(password, 10);

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
            const newUser = await User.create({ name, email, password: hashedPassword });
            res.status(200).send({ message: 'User added successfully' });
            console.log(newUser);
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { signupUser }