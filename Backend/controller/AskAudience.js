import AudienceGraphData from '../MongoesSchema/AskAudienceGraphSchema.js';

const CreateAudienceGraph = async (req, res) => {
    const { questionId, graph } = req.body;
    try {
        // Check if the data already exists
        const existingGraphData = await AudienceGraphData.findOne({ questionId, graph });
        if (existingGraphData) {
            return res.status(409).send({ message: "Question Graph data already exists" }); // 409 Conflict status code
        }
        
        // If data does not exist, create a new entry
        const graphData = new AudienceGraphData({ questionId, graph });
        const result = await graphData.save();
        res.status(201).send({ message: "Question Graph data added successfully", result: result });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

const getAllAskAudienceData = async (req, res) => {
    try {
        const totalQuestions = await AudienceGraphData.countDocuments();
        const QuestionDetailWithGraph = await AudienceGraphData.find({}).populate('questionId', 'question options correct category');
        res.status(200).json({totalQuestions, QuestionDetailWithGraph});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

export { CreateAudienceGraph, getAllAskAudienceData };
