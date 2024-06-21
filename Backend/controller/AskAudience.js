import AudienceGraphData from '../MongoesSchema/AskAudienceGraphSchema.js';

const CreateAudienceGraph = async (req, res) => {
    const { questionId, graph } = req.body;
    try {
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
        const data = await AudienceGraphData.find({}).populate('questionId', 'question options correct category');
        res.status(200).json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

export { CreateAudienceGraph, getAllAskAudienceData };
