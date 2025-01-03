const Result = require('../model/results');


// Controller to handle saving a new result
exports.addResult = async (req, res) => {
  try {
    const newResult = new Result(req.body);
    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (error) {
    console.error('Error saving result:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Controller to fetch all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching results:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
