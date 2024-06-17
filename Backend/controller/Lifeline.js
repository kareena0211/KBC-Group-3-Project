import Lifeline from '../MongoesSchema/LifelineSchema.js';

// create lifeline here 
const createLifeline = async (req, res) => {
  const { name, description } = req.body;
  try {
    // Check if lifeline already exists
    let existingLifeline = await Lifeline.findOne({ name });
    if (existingLifeline) {
      return res.status(400).json({ message: `${name} already exists as a lifeline.` });
    }

    const newLifeline = new Lifeline({
      name: name,
      description: description,
      createdBy: req.user._id, // Assuming req.user is set by verifyToken middleware
    });

    const lifeline = await newLifeline.save();
    res.status(201).json({ message: "Created lifeline successfully", lifeline: lifeline });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Find all lifelines
const getLifelines = async (req, res) => {
    try {
        const lifelines = await Lifeline.find({});
        res.status(200).send({ message: "Fetched lifelines successfully", lifelines });
    } catch (error) {
        console.error('Error fetching lifelines:', error);
        res.status(500).send({ message: 'Server Error' });
    }
};

// Delete lifelines by lifeline name
const deleteLifeline = async (req, res) => {
    const { name } = req.body;
    try {
        const deletedLifeline = await Lifeline.findOneAndDelete({ name });
        if (!deletedLifeline) {
            return res.status(404).send({ message: 'Lifeline not found' });
        }
        res.status(200).send({ message: 'Lifeline deleted successfully' });
    } catch (error) {
        console.error('Error deleting lifeline:', error);
        res.status(500).send({ message: 'Server Error' });
    }
};

export {createLifeline, getLifelines, deleteLifeline}