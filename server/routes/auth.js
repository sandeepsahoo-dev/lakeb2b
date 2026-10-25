import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Mock users store for instant preview if Mongo is offline
const memoryUsers = [
  {
    _id: 'user_default',
    email: 'admin@lakeb2b.com',
    name: 'Growth Strategist',
    company: 'LakeB2B Enterprise',
    role: 'Admin',
  },
];

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }

    let user;
    try {
      user = await User.findOne({ email });
      if (!user) {
        user = await User.create({ email, password, name: email.split('@')[0] });
      }
    } catch {
      user = memoryUsers.find((u) => u.email === email) || {
        _id: 'user_' + Date.now(),
        email,
        name: email.split('@')[0],
        company: 'Growth Partner Inc.',
        role: 'Verified B2B User',
      };
      memoryUsers.push(user);
    }

    return res.json({
      success: true,
      message: 'Login successful! Welcome to LakeB2B Intelligence Portal.',
      token: 'jwt_lakeb2b_' + Buffer.from(email).toString('base64'),
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        company: user.company,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Authentication error' });
  }
});

// GET /api/auth/profile
router.get('/profile', (req, res) => {
  res.json({
    success: true,
    user: {
      name: 'B2B Growth Strategist',
      role: 'Enterprise Member',
      accountLevel: 'Ultra High Intent Data Tier',
      verifiedCredits: 12500,
    },
  });
});

export default router;
