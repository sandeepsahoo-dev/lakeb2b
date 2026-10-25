import React from 'react';
import { Link } from 'react-router-dom';
import { Settings2, Users, Briefcase, Layers, HeartPulse, Monitor, Globe2, Building2 } from 'lucide-react';

const productsAndAccess = [
  {
    icon: <Settings2 size={22} />,
    title: 'Company API',
    desc: 'Data Enrichment & Net New Contacts; Intent Based',
    to: '/data-intelligence/company-api',
    comingSoon: false,
  },
  {
    icon: <Users size={22} />,
    title: 'People API',
    desc: 'Data Enrichment & Net New Contacts',
    to: '/data-intelligence/people-api',
    comingSoon: false,
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Job API',
    desc: 'Data Enrichment & Net New Contacts',
    to: '/data-intelligence/job-api',
    comingSoon: true,
  },
];

const dataItems = [
  {
    icon: <Layers size={22} />,
    title: 'B2B Custom Data',
    desc: 'Build Custom Datasets Tailored To Your Business Goals.',
    to: '/data-intelligence/b2b-custom-data',
  },
  {
    icon: <HeartPulse size={22} />,
    title: 'Healthcare Data',
    desc: 'Access Comprehensive Healthcare Practitioner Data.',
    to: '/data-intelligence/healthcare-data',
  },
  {
    icon: <Monitor size={22} />,
    title: 'Tech Install Data',
    desc: 'Target Companies Based On Their Software And Hardware Use.',
    to: '/data-intelligence/tech-install-data',
  },
];

const browseItems = [
  {
    icon: <Globe2 size={24} />,
    title: 'Browse Data By Geography',
    desc: 'Target Global Outreach With Geo-Specific Intent Data.',
    to: '/data-intelligence/browse-by-geography',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Browse Data By Industry',
    desc: 'Target Global Outreach With Geo-Specific Intent Data.',
    to: '/data-intelligence/browse-by-industry',
  },
];

const iconBox = {
  width: '44px',
  height: '44px',
  borderRadius: '10px',
  backgroundColor: '#f5f0ff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#6b21a8',
  flexShrink: 0,
};

const itemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '14px',
  padding: '14px 16px',
  borderRadius: '10px',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'background 0.18s ease',
};

const DataIntelligence = ({ onClose }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 12px 48px rgba(0,0,0,0.18)',
        width: '720px',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
        color: '#1a1a2e',
      }}
    >
      {/* Top two-column area */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr' }}>
        {/* PRODUCTS & ACCESS column */}
        <div style={{ padding: '24px 20px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '12px', paddingLeft: '4px' }}>
            Products &amp; Access
          </p>
          {productsAndAccess.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              onClick={onClose}
              style={itemStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={iconBox}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '15px', color: '#111827', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.title}
                  {item.comingSoon && (
                    <span style={{ fontSize: '11px', fontWeight: '600', color: '#ef4444', background: 'transparent', padding: '0' }}>
                      Coming Soon
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div style={{ backgroundColor: '#e5e7eb', margin: '24px 0' }} />

        {/* DATA column */}
        <div style={{ padding: '24px 20px' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: '#6b7280', textTransform: 'uppercase', marginBottom: '12px', paddingLeft: '4px' }}>
            Data
          </p>
          {dataItems.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              onClick={onClose}
              style={itemStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={iconBox}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '15px', color: '#111827' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Browse strip */}
      <div style={{ borderTop: '1px solid #f3f4f6', backgroundColor: '#faf9ff', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {browseItems.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            onClick={onClose}
            style={{ ...itemStyle, padding: '20px 24px', borderRadius: '0' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#ede9fe')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <div style={{ ...iconBox, backgroundColor: '#ede9fe' }}>{item.icon}</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '14px', color: '#111827' }}>{item.title}</div>
              <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>{item.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DataIntelligence;
