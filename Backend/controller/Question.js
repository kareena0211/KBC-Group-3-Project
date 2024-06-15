import { Question } from '../MongoesSchema/questionSchema.js';

// PutQuestion function
const PutQuestion = async (req, res) => {
    const { question, options, correct } = req.body;
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
            correct: correct
        });

        const result = await newQuestion.save();
        res.send({ message: "Question added successfully", result: result });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

const getAllQuestions = async (req, res) => {
    try {
        const AllQuestions = await Question.find({});
        res.json(AllQuestions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

const deleteQuestion = async (req, res) => {
    const { question } = req.body;
    try {
        const deletedQuestion = await Question.findOneAndDelete({ question });
        if (!deletedQuestion) {
            return res.status(404).send({ message: 'Question not found' });
        }
        res.status(200).send({ message: 'Question deleted successfully' });
    } catch (error) {
        console.error('Error deleting Question:', error);
        res.status(500).send({ message: 'Server Error' });
    }
};

export {PutQuestion, getAllQuestions, deleteQuestion}