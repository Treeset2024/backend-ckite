const express = require('express');
const resultController = require('../Controller/resultcontroller');


const router = express.Router();


// POST route to save results
router.post('/Result', resultController.addResult);


// GET route to fetch all results
router.get('/Results', resultController.getAllResults);


module.exports = router;
