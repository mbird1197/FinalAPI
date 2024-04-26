const States = require('../model/States');
const states = require('../model/States');
const allStatesData = require('../model/statesData.json');

const getAllStates = async (req, res) => {

    const states = await States.find();
    if(!states) return res.status(204).json({ 'message' : 'No states found.'});
    res.json(states);

    
}


