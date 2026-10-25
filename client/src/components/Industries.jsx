import React from 'react';
import { Laptop, HeartPulse, Landmark, Factory, ShoppingCart, Fuel, ArrowRight } from 'lucide-react';

const Industries = ({ onClose, onSelectAction }) => {
  const industries = [
    {
      name: 'Technology & SaaS',
      icon: <Laptop style={{ color: '#38bdf8', width: '20px', height: '20px' }} />,
      stats: '14.2M Decision Makers',
      highlight: 'CTO, VP Eng, Cloud & DevOps buyers',
    },
    {
      name: 'Healthcare & Medical',
      icon: <HeartPulse style={{ color: '#f43f5e', width: '20px', height: '20px' }} />,
      stats: '4.8M Verified Contacts',
      highlight: 'NPI registered physicians, Hospital Execs',
    },
    {
      name: 'Finance & Banking',
      icon: <Landmark style={{ color: '#eab308', width: '20px', height: '20px' }} />,
      stats: '6.5M Financial Execs',
      highlight: 'Asset Managers, Fintech CXOs, CFOs',
    },
    {
      name: 'Manufacturing & Industrial',
      icon: <Factory style={{ color: '#a855f7', width: '20px', height: '20px' }} />,
      stats: '8.1M Operations Leads',
      highlight: 'Plant Managers, Supply Chain Directors',
    },
    {
      name: 'Retail & E-commerce',
      icon: <ShoppingCart style={{ color: '#ec4899', width: '20px', height: '20px' }} />,
      stats: '5.2M Retail Leaders',
      highlight: 'Merchandising, Brand VP, Omnichannel',
    },
    {
      name: 'Energy & Utilities',
      icon: <Fuel style={{ color: '#10b981', width: '20px', height: '20px' }} />,
      stats: '3.4M Energy Specialists',
      highlight: 'Renewables, Grid Tech, Exploration VP',
    },
  ];

  return (
    <div style={{ padding: '24px 28px', maxWidth: '750px', color: '#ffffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 10px #38bdf8'
            }} />
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.01em' }}>Targeted B2B Industries</h3>
          </div>
          <p style={{ fontSize: '13px', color: '#a79ec2', marginTop: '4px' }}>
            Pre-curated and dynamically enriched audiences segmented by 140+ vertical taxonomies.
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#8e84a8',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px 8px',
            }}
          >
            ✕
          </button>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        {industries.map((ind, index) => (
          <div
            key={index}
            onClick={() => onSelectAction && onSelectAction('free_sample', ind.name)}
            style={{
              padding: '14px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(168, 85, 247, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.15)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {ind.icon}
              </div>
              <h4 style={{ fontSize: '13.5px', fontWeight: '600' }}>{ind.name}</h4>
            </div>
            <div style={{ fontSize: '12px', color: '#c084fc', fontWeight: '600', marginBottom: '4px' }}>
              {ind.stats}
            </div>
            <div style={{ fontSize: '11px', color: '#9d94b8', lineHeight: 1.4 }}>
              {ind.highlight}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.1), rgba(168, 85, 247, 0.1))',
          padding: '12px 18px',
          borderRadius: '8px',
          border: '1px solid rgba(56, 189, 248, 0.25)',
        }}
      >
        <span style={{ fontSize: '12.5px', color: '#e2e8f0' }}>
          Looking for a custom niche industry dataset?
        </span>
        <button
          onClick={() => onSelectAction && onSelectAction('free_sample')}
          style={{
            background: '#38bdf8',
            color: '#031726',
            border: 'none',
            padding: '6px 14px',
            borderRadius: '6px',
            fontWeight: '700',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>Get Industry Sample</span>
          <ArrowRight style={{ width: '13px', height: '13px' }} />
        </button>
      </div>
    </div>
  );
};

export default Industries;
