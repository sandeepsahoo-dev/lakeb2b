import React from 'react';
import { Award, Globe2, ShieldAlert, TrendingUp, Building2, CheckCircle2 } from 'lucide-react';

const AboutUs = ({ onClose, onSelectAction }) => {
  return (
    <div style={{ padding: '24px 28px', maxWidth: '680px', color: '#ffffff' }}>
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
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.01em' }}>About LakeB2B</h3>
          </div>
          <p style={{ fontSize: '13px', color: '#a79ec2', marginTop: '4px' }}>
            The growth enablement engine trusted by Fortune 500s and hyper-growth unicorns.
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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            padding: '14px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            textAlign: 'center',
          }}
        >
          <Award style={{ color: '#a855f7', width: '24px', height: '24px', margin: '0 auto 6px' }} />
          <div style={{ fontSize: '18px', fontWeight: '800' }}>16+ Years</div>
          <div style={{ fontSize: '11px', color: '#9d94b8' }}>Industry Pioneering</div>
        </div>
        <div
          style={{
            padding: '14px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            textAlign: 'center',
          }}
        >
          <Building2 style={{ color: '#ec4899', width: '24px', height: '24px', margin: '0 auto 6px' }} />
          <div style={{ fontSize: '18px', fontWeight: '800' }}>2,000+</div>
          <div style={{ fontSize: '11px', color: '#9d94b8' }}>Enterprise Clients</div>
        </div>
        <div
          style={{
            padding: '14px',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            textAlign: 'center',
          }}
        >
          <Globe2 style={{ color: '#06b6d4', width: '24px', height: '24px', margin: '0 auto 6px' }} />
          <div style={{ fontSize: '18px', fontWeight: '800' }}>160+</div>
          <div style={{ fontSize: '11px', color: '#9d94b8' }}>Countries Covered</div>
        </div>
      </div>

      <div style={{ fontSize: '13px', color: '#c7c0db', lineHeight: 1.6, marginBottom: '20px' }}>
        <p style={{ marginBottom: '10px' }}>
          At LakeB2B, we believe outbound pipeline shouldn't rely on guesswork. We build bespoke B2B contact intelligence coupled with real-time intent signals, empowering sales and marketing teams to engage decision makers with precision.
        </p>
        <p>
          Whether you prefer consuming clean data streams directly via our low-latency API, or having our growth team orchestrate end-to-end outbound outreach, LakeB2B delivers measurable revenue acceleration.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button
          onClick={() => onSelectAction && onSelectAction('contact_sales')}
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            border: 'none',
            color: '#ffffff',
            padding: '9px 18px',
            borderRadius: '6px',
            fontSize: '12.5px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Contact Our Leadership
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
