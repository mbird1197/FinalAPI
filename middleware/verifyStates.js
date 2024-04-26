const statesData = require('../model/statesData.json');
const express = require('express');
const app = express();


const verifyStates = (req, res, next) => {

app.get('/states/:state', (req, res, next) =>{

    const stateCode = req.params.state;

    const upperCaseCode = stateCode.toUpperCase();


    

    next();
})



}