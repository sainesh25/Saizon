const User = require('../models/user');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

const signupUser = async (req, res) => {
    //  console.log(req.headers);
    const data = req.body;
    // console.log("smtg");
    // console.log(data);
    try {

        await User.create(data);
        // console.log(data);
        const user = await User.find({ name: data.name, email: data.email, password: data.password  })
        res.status(200).send({ message: 'User added successfully', user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { signupUser }