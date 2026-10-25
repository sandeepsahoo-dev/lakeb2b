import express from 'express';

const router = express.Router();

const mockKnowledgeBase = [
  {
    category: 'Data Intelligence',
    title: 'Custom B2B Contact Databases',
    description: 'Triple-verified email, direct dials, and org charts for over 450M global contacts.',
    tag: 'Intelligence',
  },
  {
    category: 'Data Intelligence',
    title: 'Real-Time Intent Signals',
    description: 'Track buying surges across 12,000+ topics with dynamic intent monitoring.',
    tag: 'Signals',
  },
  {
    category: 'Data Intelligence',
    title: 'API Stream & CRM Enrichment',
    description: 'Instant REST API hookups to sync fresh B2B data straight into Salesforce & HubSpot.',
    tag: 'API',
  },
  {
    category: 'Solutions',
    title: 'Account-Based Marketing (ABM) Data',
    description: 'Precision targeting lists with decision-maker hierarchy and buying committee maps.',
    tag: 'Solutions',
  },
  {
    category: 'Solutions',
    title: 'Managed Cold Outreach Campaigns',
    description: 'Hand your entire outreach lifecycle to LakeB2B specialist SDR teams.',
    tag: 'Solutions',
  },
  {
    category: 'Industries',
    title: 'Healthcare & Life Sciences B2B Data',
    description: 'NPI verified medical professionals, hospital directors, and procurement specialists.',
    tag: 'Industries',
  },
  {
    category: 'Industries',
    title: 'Technology & Enterprise SaaS Decision Makers',
    description: 'CTO, CIO, VP Engineering, and DevOps decision-makers active in tech stacks.',
    tag: 'Industries',
  },
  {
    category: 'Industries',
    title: 'Financial Services & Banking',
    description: 'Accredited investors, asset management execs, and fintech leaders.',
    tag: 'Industries',
  },
  {
    category: 'Resources',
    title: '2026 B2B Outreach Benchmark Report',
    description: 'Analysis of 18M cold emails and multi-channel touches across 40 niches.',
    tag: 'Whitepaper',
  },
  {
    category: 'About Us',
    title: 'LakeB2B - 16+ Years Enabling B2B Growth',
    description: 'Over 2,000 global enterprise clients trust LakeB2B for custom data delivery.',
    tag: 'Company',
  },
];

// GET /api/search?q=
router.get('/', (req, res) => {
  const query = (req.query.q || '').toLowerCase().trim();
  if (!query) {
    return res.json({ success: true, count: mockKnowledgeBase.length, results: mockKnowledgeBase.slice(0, 5) });
  }

  const results = mockKnowledgeBase.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.tag.toLowerCase().includes(query)
  );

  return res.json({
    success: true,
    query,
    count: results.length,
    results,
  });
});

export default router;
