import express from 'express';

const router = express.Router();

// GET /api/intelligence/stats
router.get('/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      globalVerifiedContacts: '450M+',
      intentSignalsPerDay: '3.8M',
      dataAccuracyGuarantee: '95%',
      countriesCovered: '160+',
      apiUptime: '99.99%',
      activeCampaignsHandled: '2,400+',
    },
  });
});

// GET /api/intelligence/sample-records
router.get('/sample-records', (req, res) => {
  res.json({
    success: true,
    records: [
      {
        name: 'Elena Rostova',
        title: 'VP of Global Infrastructure',
        company: 'HyperCloud Systems',
        industry: 'Enterprise Cloud',
        location: 'Austin, TX',
        intentScore: 94,
        intentTopic: 'Kubernetes Observability & Cost Optimization',
        verifiedChannels: ['Direct Dial', 'Work Email', 'LinkedIn Pro'],
      },
      {
        name: 'Marcus Vance',
        title: 'Chief Information Security Officer',
        company: 'Apex Financial Data',
        industry: 'Fintech & Security',
        location: 'New York, NY',
        intentScore: 98,
        intentTopic: 'Zero Trust SOC 2 Automation',
        verifiedChannels: ['Direct Dial', 'Verified Email'],
      },
      {
        name: 'Dr. Sarah Lin',
        title: 'Director of Clinical Informatics',
        company: 'Biotech Health Partners',
        industry: 'Life Sciences',
        location: 'Boston, MA',
        intentScore: 91,
        intentTopic: 'AI Diagnostic Workflows',
        verifiedChannels: ['NPI Verified', 'Direct Email'],
      },
    ],
  });
});

export default router;
