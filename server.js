const express = require('express');
const app = express();
const path = require('path');
const verifyStateCodes = require('./middleware/verifyStates');
const statesData = require('./model/statesData.json');
const cors = require('cors');
const { applyDefaults } = require('./model/States');
const PORT = process.env.PORT || 3500;
app.use(cors());
app.use(verifyStateCodes);
app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.get('/', (req, res) => {

res.sendFile(path.join(__dirname, 'views', 'index.html'));

})

app.get('/states/', (req, res) => {

res.json(statesData);


})

app.get('/states/:state',   (req, res) => {
    
    const state = req.code;
    res.json({ state });
});


//




app.all('*', (req, res) => {

res.status(404);
if(req.accepts('html')) {

    res.sendFile(path.join(__dirname, 'views', '404.html'));
} else if (req.accepts('json')){
    res.json({"error" : "404 Not Found"});

} else {
    res.type('txt').send('404 Not Found');
}


});




app.listen(PORT, () => console.log(`Running on port ${PORT}`));