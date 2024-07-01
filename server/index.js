require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// console.log(process.env.PORT);
const allRoutes = require('../server/utils/allRoutes');
allRoutes(app);

// console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connection established');
    })
    .catch((err) => console.log('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Hello!!');
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
