const Result = require('../model/results');
const Registration = require('../model/Registration'); // User model

// POST: Store result for a logged-in user
exports.storeResult = async (req, res) => {
  try {
    const { email } = req.body; // Get email from the request body
    const {
      subModuleName,
      score,
      maxScore,
      percentage,
      questionsAttempted,
      totalQuestions,
      timeTaken,
      totalTime,
      startTime,
      endTime,
    } = req.body.result; // Extract result data from request body

    // Find the user by email
    const user = await Registration.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: `User with email ${email} not found.` });
    }

    // Create a new result object
    const result = {
      subModuleName,
      score,
      maxScore,
      percentage,
      questionsAttempted,
      totalQuestions,
      timeTaken,
      totalTime,
      startTime,
      endTime,
    };

    // Add the result to the user's results array
    user.results.push(result);
    await user.save();

    res.status(201).json({ message: 'Result stored successfully.', result });
  } catch (error) {
    console.error('Error storing result:', error);
    res.status(500).json({ message: 'Error storing result', error: error.message });
  }
};



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
// GET: Fetch all results of a user by email
exports.getResultsByEmail = async (req, res) => {
  try {
    const { email } = req.params; // Get email from the URL params

    const user = await Registration.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: `User with email ${email} not found.` });
    }

    res.status(200).json({
      message: 'Results fetched successfully.',
      results: user.results,
    });
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ message: 'Error fetching results', error: error.message });
  }
};
