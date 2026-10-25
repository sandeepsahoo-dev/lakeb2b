import React, { useState, useEffect } from 'react';
import { Database, Zap, Cpu, CheckCircle2, ShieldCheck, ArrowRight, BarChart3, Layers } from 'lucide-react';

const DataIntelligence = ({ onClose, onSelectAction }) => {
  const [stats, setStats] = useState({
    globalVerifiedContacts: '450M+',
    intentSignalsPerDay: '3.8M',
    dataAccuracyGuarantee: '95%',
    apiUptime: '99.99%',
  });

  useEffect(() => {
    fetch('/api/intelligence/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setStats(data.data);
        }
      })
      .catch((err) => console.log('Using default intelligence stats'));
  }, []);

  const features = [
    {
      icon: <Database className="w-5 h-5 text-cyan-400" style={{ color: '#06b6d4' }} />,
      title: 'Custom B2B Contact Data',
      desc: 'Triple-verified email addresses, direct dial mobile numbers, and organizational hierarchies for global decision makers.',
    },
    {
      icon: <Zap className="w-5 h-5 text-pink-400" style={{ color: '#ec4899' }} />,
      title: 'Real-Time Intent Signals',
      desc: 'Detect surge in purchase interest across 12,000+ topics before your competitors even know prospects are shopping.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" style={{ color: '#a855f7' }} />,
      title: 'High-Speed REST API',
      desc: 'Enrich incoming web leads or sync dynamically with Salesforce, HubSpot, and Marketo in sub-120ms latency.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" style={{ color: '#10b981' }} />,
      title: 'GDPR & CCPA Compliant',
      desc: 'Rigorous 8-step validation process ensuring 100% compliant data with 95% deliverability SLA guarantee.',
    },
  ];

  return (
    <div
      style={{
        padding: '24px 28px',
        maxWidth: '720px',
        color: '#ffffff',
      }}
    >
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
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.01em' }}>Data Intelligence Engine</h3>
          </div>
          <p style={{ fontSize: '13px', color: '#a79ec2', marginTop: '4px' }}>
            Empowering modern outbound engines with verified intelligence and intent triggers.
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

      {/* Grid of features */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
          marginBottom: '22px',
        }}
      >
        {features.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(168, 85, 247, 0.15)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.15)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
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
                {item.icon}
              </div>
              <h4 style={{ fontSize: '14.5px', fontWeight: '600' }}>{item.title}</h4>
            </div>
            <p style={{ fontSize: '12.5px', color: '#b6adc9', lineHeight: 1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
          padding: '14px',
          borderRadius: '10px',
          backgroundColor: 'rgba(76, 17, 134, 0.25)',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          textAlign: 'center',
          marginBottom: '16px',
        }}
      >
        <div>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#c084fc' }}>{stats.globalVerifiedContacts}</div>
          <div style={{ fontSize: '11px', color: '#9d94b8', textTransform: 'uppercase' }}>Verified Contacts</div>
        </div>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#38bdf8' }}>{stats.intentSignalsPerDay}</div>
          <div style={{ fontSize: '11px', color: '#9d94b8', textTransform: 'uppercase' }}>Daily Signals</div>
        </div>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#f472b6' }}>{stats.dataAccuracyGuarantee}</div>
          <div style={{ fontSize: '11px', color: '#9d94b8', textTransform: 'uppercase' }}>Accuracy SLA</div>
        </div>
        <div>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#34d399' }}>{stats.apiUptime}</div>
          <div style={{ fontSize: '11px', color: '#9d94b8', textTransform: 'uppercase' }}>API Uptime</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        <button
          onClick={() => onSelectAction && onSelectAction('free_sample')}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '12.5px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Explore Sample Records
        </button>
        <button
          onClick={() => onSelectAction && onSelectAction('talk_expert')}
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
            border: 'none',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '6px',
            fontSize: '12.5px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span>Connect API</span>
          <ArrowRight className="w-3.5 h-3.5" style={{ width: '14px', height: '14px' }} />
        </button>
      </div>
    </div>
  );
};

export default DataIntelligence;
