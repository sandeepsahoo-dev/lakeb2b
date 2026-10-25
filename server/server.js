import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import contactRoutes from './routes/contact.js';
import authRoutes from './routes/auth.js';
import searchRoutes from './routes/search.js';
import intelligenceRoutes from './routes/dataIntelligence.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lakeb2b';

// Middlewares
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  const dbState = mongoose.connection.readyState;
  const statusMap = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };
  res.json({
    status: 'healthy',
    service: 'LakeB2B Intelligence Backend',
    database: statusMap[dbState] || 'unknown',
    timestamp: new Date(),
  });
});

// Mount modular API routes
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/intelligence', intelligenceRoutes);

// MongoDB connection with non-blocking graceful fallback
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 2000,
    });
    console.log('✅ Connected to MongoDB at:', MONGO_URI);
  } catch (err) {
    console.warn('⚠️  MongoDB connection warning:', err.message);
    console.warn('ℹ️  Running with in-memory persistence fallback for seamless demo mode.');
  }
}

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 LakeB2B Server is running on http://localhost:${PORT}`);
});
