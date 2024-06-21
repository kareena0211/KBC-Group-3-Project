import { Question } from '../MongoesSchema/questionSchema.js';

// PutQuestion function
const PutQuestion = async (req, res) => {
    const { question, options, correct, category } = req.body;
    try {
        // Check if question already exists
        let existingQuestion = await Question.findOne({ question });
        if (existingQuestion) {
            return res.status(400).json({ message: 'Question already exists!' });
        }

        // Create new question
        const newQuestion = new Question({
            question: question,
            options: options,
            correct: correct,
            category: category
        });

        const result = await newQuestion.save();
        res.send({ message: "Question added successfully", result: result });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// find all questions
const getAllQuestions = async (req, res) => {
    try {
        const AllQuestions = await Question.find({});
        res.json(AllQuestions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Find Random 10 questions
const getRandomQuestions = async (req, res) => {
    try {
        const totalQuestions = await Question.countDocuments();
        const selectedQuestions = await Question.aggregate([{ $sample: { size: 20 } }]);

        res.json({
            totalQuestions,
            selectedCount: selectedQuestions.length,
            selectedQuestions
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Delete question by questio name
const deleteQuestion = async (req, res) => {
    const { id } = req.body; // Assuming the frontend sends `id` in the body
    try {
        const deletedQuestion = await Question.findByIdAndDelete(id);
        if (!deletedQuestion) {
            return res.status(404).send({ message: 'Question not found' });
        }
        res.status(200).send({ message: 'Question deleted successfully' });
    } catch (error) {
        console.error('Error deleting question:', error);
        res.status(500).send({ message: 'Server Error' });
    }
};
export { PutQuestion, getAllQuestions, getRandomQuestions, deleteQuestion }