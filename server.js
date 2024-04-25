require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const corsOptions = require('./config/corsOptions');

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//

app.get('/', (req, res)=> {

res.sendFile(path.join(__dirname, 'views', 'index.html'));


})

app.get('/states', (req, res) => {

res.sendFile(path.join(__dirname, 'model', 'statesData.json').json());


})

app.all('*', (req, res) => {

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
connectDB();

mongoose.connection.once('open', () => {

    console.log('Connected to MongoDB');
    




})

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

//await mongoose.connect(process.env.DATABASE_URI);  goes into the conenctDb function