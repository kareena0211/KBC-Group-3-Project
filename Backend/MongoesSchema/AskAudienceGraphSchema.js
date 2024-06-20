import mongoose from 'mongoose';

const AskAudienceGraphSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'questions', required: true },
  graph:{
    Index_0: { type: String, required: true },
    Index_1: { type: String, required: true },
    Index_2: { type: String, required: true },
    Index_3: { type: String, required: true },
  }
});

const AudienceGraphData = mongoose.model('AudienceGraphData', AskAudienceGraphSchema);

export default AudienceGraphData;
