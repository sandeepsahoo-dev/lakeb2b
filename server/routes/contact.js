import express from 'express';
import Contact from '../models/Contact.js';
import Lead from '../models/Lead.js';

const router = express.Router();

// In-memory fallback if MongoDB is not running locally
const memoryContacts = [];
const memoryLeads = [];

// POST /api/contact/sales
router.post('/sales', async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required' });
    }

    let savedContact;
    try {
      savedContact = await Contact.create({
        name,
        email,
        company,
        phone,
        message,
        requestType: 'contact_sales',
      });
    } catch (dbErr) {
      // Graceful fallback to memory store if Mongo is not connected
      savedContact = {
        _id: 'mem_' + Date.now(),
        name,
        email,
        company,
        phone,
        message,
        requestType: 'contact_sales',
        createdAt: new Date(),
      };
      memoryContacts.push(savedContact);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! A LakeB2B sales director will reach out within 15 minutes.',
      data: savedContact,
    });
  } catch (error) {
    console.error('Contact sales error:', error);
    return res.status(500).json({ success: false, message: 'Server error processing request' });
  }
});

// POST /api/contact/talk-to-expert
router.post('/talk-to-expert', async (req, res) => {
  try {
    const { name, email, phone, requirements } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    let saved;
    try {
      saved = await Contact.create({
        name: name || 'Enterprise Client',
        email,
        phone,
        message: requirements,
        requestType: 'talk_expert',
      });
    } catch (err) {
      saved = { _id: 'mem_' + Date.now(), name, email, phone, requestType: 'talk_expert' };
      memoryContacts.push(saved);
    }

    return res.status(201).json({
      success: true,
      message: 'Expert session scheduled! A data intelligence specialist will contact you.',
      data: saved,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// POST /api/contact/free-sample
router.post('/free-sample', async (req, res) => {
  try {
    const { email, industry, audience } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Work email is required' });
    }

    let sampleLead;
    try {
      sampleLead = await Lead.create({
        requestedByEmail: email,
        industry: industry || 'Technology & SaaS',
        targetAudience: audience || 'B2B Decision Makers',
      });
    } catch (err) {
      sampleLead = { _id: 'sample_' + Date.now(), requestedByEmail: email, industry, audience };
      memoryLeads.push(sampleLead);
    }

    return res.status(201).json({
      success: true,
      message: 'Sample B2B data pack (50 verified records with phone & email) is dispatched to your inbox!',
      data: sampleLead,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET /api/contact/all (For admin/inspection)
router.get('/all', async (req, res) => {
  try {
    let contacts;
    try {
      contacts = await Contact.find().sort({ createdAt: -1 }).limit(20);
    } catch {
      contacts = memoryContacts;
    }
    return res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
