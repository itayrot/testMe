const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/testme";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
