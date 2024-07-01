const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();
const Test = require('../models/test');

router.get('/test', async (req, res) => {
    try {
        console.log('here');
      //  const data = await Test.find();
        res.json({
            status: 1,
            message: 'Successful',
           
        });
    }
    catch (err) {
        res.json({
            status: 0,
            message: 'Error!!',
        });
    }
})

module.exports = router;