import React from 'react';
import { BookOpen, FileText, BarChart, DownloadCloud, Sparkles, ExternalLink } from 'lucide-react';

const Resources = ({ onClose, onSelectAction }) => {
  const resourceCards = [
    {
      title: '2026 Outbound Benchmark Report',
      desc: 'Insights and conversion metrics across 18M cold emails and multi-channel touches.',
      type: 'Whitepaper',
      color: '#a855f7',
    },
    {
      title: 'The Intent Signals Playbook',
      desc: 'How revenue leaders use intent data to intercept active buyers 3x faster.',
      type: 'Strategy Guide',
      color: '#ec4899',
    },
    {
      title: 'Enterprise Case Study: FinTech Scale',
      desc: 'How Apex Cloud scaled from $10M to $35M ARR with LakeB2B verified direct dials.',
      type: 'Customer Story',
      color: '#06b6d4',
    },
    {
      title: 'Interactive Pipeline ROI Calculator',
      desc: 'Calculate expected meetings and revenue from your total addressable market.',
      type: 'Interactive Tool',
      color: '#10b981',
    },
  ];

  return (
    <div style={{ padding: '24px 28px', maxWidth: '700px', color: '#ffffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#a855f7',
              boxShadow: '0 0 10px #a855f7'
            }} />
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.01em' }}>LakeB2B Knowledge Hub</h3>
          </div>
          <p style={{ fontSize: '13px', color: '#a79ec2', marginTop: '4px' }}>
            Latest guides, intelligence frameworks, and benchmark data for high-growth teams.
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        {resourceCards.map((res, index) => (
          <div
            key={index}
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(168, 85, 247, 0.15)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.15)';
            }}
          >
            <span
              style={{
                fontSize: '10px',
                padding: '2px 8px',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                color: res.color,
                fontWeight: '700',
                textTransform: 'uppercase',
              }}
            >
              {res.type}
            </span>
            <h4 style={{ fontSize: '14px', fontWeight: '600', marginTop: '8px', marginBottom: '6px' }}>
              {res.title}
            </h4>
            <p style={{ fontSize: '12px', color: '#9d94b8', lineHeight: 1.4 }}>{res.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => onSelectAction && onSelectAction('free_sample')}
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            border: 'none',
            color: '#ffffff',
            padding: '9px 18px',
            borderRadius: '6px',
            fontSize: '12.5px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <DownloadCloud style={{ width: '15px', height: '15px' }} />
          <span>Download Free Sample Pack</span>
        </button>
      </div>
    </div>
  );
};

export default Resources;
