import React from 'react';
import { Link } from 'react-router-dom';
import { Database, FileCheck2, PlusSquare, Brush, Mail, Target, Presentation, TrendingUp, Lightbulb, Palette } from 'lucide-react';

const dataItems = [
  {
    icon: <Database size={20} />,
    title: 'Enrichment',
    desc: 'Turn incomplete data into accurate, actionable prospect intelligence.',
    to: '/solutions/enrichment',
  },
  {
    icon: <FileCheck2 size={20} />,
    title: 'Data Hygiene',
    desc: 'Keep your data clean, accurate, and ready for action.',
    to: '/solutions/data-hygiene',
  },
  {
    icon: <PlusSquare size={20} />,
    title: 'Appending',
    desc: 'Complete missing prospect data with accurate, verified details.',
    to: '/solutions/appending',
  },
  {
    icon: <Brush size={20} />,
    title: 'Cleansing',
    desc: 'Clean, accurate data that keeps your outreach on target.',
    to: '/solutions/cleansing',
  },
];

const marketingSuiteItems = [
  {
    icon: <Mail size={20} />,
    title: 'Email Campaign Management',
    desc: 'Build, launch, and optimize campaigns.',
    to: '/solutions/email-campaign-management',
  },
  {
    icon: <Target size={20} />,
    title: 'Account Based Marketing',
    desc: 'Target high-value accounts with personalized campaigns that drive pipeline.',
    to: '/solutions/account-based-marketing',
  },
  {
    icon: <Presentation size={20} />,
    title: 'Webinars & Event Management',
    desc: 'Plan, promote, and execute events that turn engagement into opportunities.',
    to: '/solutions/webinars-event-management',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'GTM',
    desc: 'Accelerate market entry with a focused, revenue-driven GTM strategy.',
    to: '/solutions/gtm',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Bespoke Growth Solutions',
    desc: 'Tailored growth strategies built around your goals, market, and audience.',
    to: '/solutions/bespoke-growth-solutions',
  },
  {
    icon: <Palette size={20} />,
    title: 'Experience Design',
    desc: 'Design digital experiences that connect brand, website, and creative.',
    to: '/solutions/experience-design',
  },
];

const iconBox = {
  width: '44px',
  height: '44px',
  borderRadius: '10px',
  backgroundColor: '#f0f0f8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#4b5563',
  flexShrink: 0,
};

const itemLinkStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '14px',
  padding: '12px 14px',
  borderRadius: '10px',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'background 0.18s ease',
};

const Solutions = ({ onClose }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 12px 48px rgba(0,0,0,0.18)',
        width: '820px',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
        color: '#1a1a2e',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1px 1fr' }}>

        {/* DATA column */}
        <div style={{ padding: '24px 16px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '12px', paddingLeft: '4px' }}>
            Data
          </p>
          {dataItems.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              onClick={onClose}
              style={itemLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={iconBox}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#111827' }}>{item.title}</div>
                <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div style={{ backgroundColor: '#e5e7eb', margin: '24px 0' }} />

        {/* MARKETING SUITE column */}
        <div style={{ padding: '24px 20px' }}>
          {/* Header with MetricFox branding */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingLeft: '4px' }}>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: '#6b7280', textTransform: 'uppercase', margin: 0 }}>
              Marketing Suite
            </p>
            <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: '500' }}>Powered By</span>
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#f97316', letterSpacing: '-0.02em' }}>
              Metric<span style={{ color: '#ef4444' }}>Fox</span>
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
            {marketingSuiteItems.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                onClick={onClose}
                style={itemLinkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ ...iconBox, width: '38px', height: '38px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '13.5px', color: '#111827' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
