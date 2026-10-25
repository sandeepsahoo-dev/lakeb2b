import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    requestType: {
      type: String,
      enum: ['contact_sales', 'talk_expert', 'free_sample'],
      default: 'contact_sales',
    },
    status: {
      type: String,
      enum: ['new', 'in_review', 'contacted'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
