import 'dotenv/config' 
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import allRoutes from '../server/utils/allRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// console.log(process.env.PORT);
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
