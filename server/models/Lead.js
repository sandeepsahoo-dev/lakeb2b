import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema(
  {
    targetAudience: {
      type: String,
      default: 'B2B Tech Executives',
    },
    sampleRecordsCount: {
      type: Number,
      default: 50,
    },
    requestedByEmail: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      default: 'Technology & SaaS',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
