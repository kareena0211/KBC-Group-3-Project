import mongoose from 'mongoose';
const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correct: { type: Number, required: true },
  category: { type: String, required: true }
});
const Question = mongoose.model('questions', QuestionSchema);

export { Question };