const express = require('express');
const app = express();
const path = require('path');
const statesData = require('./model/statesData.json');
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false}));

app.use(express.json());


app.get('/states/', (req, res) => {

res.json(statesData);


})







app.get('/*', (req, res) => {


res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));


})

app.listen(PORT, () => console.log(`Running on port ${PORT}`));