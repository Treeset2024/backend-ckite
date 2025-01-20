const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;



const resultSchema = new mongoose.Schema({
  subModuleName: { type: String, required: true },
  score: { type: Number, required: true },
  maxScore: { type: Number, required: true },
  percentage: { type: String, required: true },
  questionsAttempted: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  timeTaken: { type: String, required: true },
  totalTime: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  answers: [
    {
      question: { type: String, required: true },
      selectedOption: { type: Number },
      correctOption: { type: Number, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});















// Define Registration schema (user schema)
const registerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: false },
  instituteName: { type: String, required: true },
  stream: { type: String, required: true },
  degree: { type: String, required: true },
  password: { type: String, required: true },
  results: [resultSchema],  // Array of results, linking results to the user
}, { timestamps: true });

// Pre-save middleware to hash the password before saving
registerSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to compare entered password with the stored hash
registerSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export the Registration model
module.exports = mongoose.model('Registration', registerSchema);
