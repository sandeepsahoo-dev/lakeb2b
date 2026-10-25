import React from 'react';
import { Target, Send, RefreshCw, Users, Check, Sparkles, ArrowRight } from 'lucide-react';

const Solutions = ({ onClose, onSelectAction }) => {
  const solutionsList = [
    {
      title: 'Account-Based Marketing (ABM)',
      desc: 'Pinpoint high-value accounts with buying committee mapping, org charts, and technographic triggers.',
      icon: <Target style={{ color: '#ec4899', width: '20px', height: '20px' }} />,
      tag: 'High ROI',
    },
    {
      title: 'Hand-Off Campaign Execution',
      desc: 'Hand your whole cold outreach campaign to our experienced LakeB2B team with guaranteed qualified meetings.',
      icon: <Send style={{ color: '#a855f7', width: '20px', height: '20px' }} />,
      tag: 'Managed Outbound',
    },
    {
      title: 'Automated CRM Enrichment',
      desc: 'Keep your Salesforce or HubSpot database perpetually updated with automated decay scrubbing and verified fills.',
      icon: <RefreshCw style={{ color: '#06b6d4', width: '20px', height: '20px' }} />,
      tag: 'Real-time',
    },
    {
      title: 'Dedicated SDR & Lead Teams',
      desc: 'Scale your sales pipeline with specialized outbound prospectors trained on your exact ICP and positioning.',
      icon: <Users style={{ color: '#f59e0b', width: '20px', height: '20px' }} />,
      tag: 'Turnkey',
    },
  ];

  return (
    <div style={{ padding: '24px 28px', maxWidth: '720px', color: '#ffffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#ec4899',
              boxShadow: '0 0 10px #ec4899'
            }} />
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.01em' }}>B2B Growth Solutions</h3>
          </div>
          <p style={{ fontSize: '13px', color: '#a79ec2', marginTop: '4px' }}>
            Tailored outbound and data strategies designed to accelerate pipeline velocity.
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
          marginBottom: '20px',
        }}
      >
        {solutionsList.map((sol, index) => (
          <div
            key={index}
            style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(168, 85, 247, 0.15)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(236, 72, 153, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.15)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {sol.icon}
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: '600' }}>{sol.title}</h4>
              </div>
              <span
                style={{
                  fontSize: '10px',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(168, 85, 247, 0.2)',
                  color: '#d8b4fe',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                }}
              >
                {sol.tag}
              </span>
            </div>
            <p style={{ fontSize: '12.5px', color: '#b6adc9', lineHeight: 1.5 }}>{sol.desc}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 18px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <span style={{ fontSize: '13px', color: '#c4bcd8' }}>
          Need a fully custom data build for your specific tech stack?
        </span>
        <button
          onClick={() => onSelectAction && onSelectAction('contact_sales')}
          style={{
            background: '#ffffff',
            color: '#0a0418',
            border: 'none',
            padding: '8px 18px',
            borderRadius: '6px',
            fontWeight: '700',
            fontSize: '12.5px',
            cursor: 'pointer',
          }}
        >
          Talk With Our Architects
        </button>
      </div>
    </div>
  );
};

export default Solutions;
