require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');

app.get('/', (req, res)=> {

res.sendFile('./views/index.html', {root: __dirname});


//

})

connectDB();


app.use(cors());



app.use(express.urlencoded({ extended: false}));
app.use(express.json());


mongoose.connection.once('open', () => {

    console.log('Connected to MongoDB');
    




})

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

//await mongoose.connect(process.env.DATABASE_URI);  goes into the conenctDb function