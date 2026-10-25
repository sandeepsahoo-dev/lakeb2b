import React from 'react';
import { ShieldCheck, Globe, Lock, ArrowUp } from 'lucide-react';

const Footer = ({ onOpenContactSales, onOpenExpert, onOpenLogin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#05020d',
        borderTop: '1px solid rgba(168, 85, 247, 0.12)',
        color: '#9d94b8',
        padding: '50px 32px 30px',
        fontSize: '13px',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '36px',
          marginBottom: '40px',
        }}
      >
        {/* Brand Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1, marginBottom: '12px' }}>
            <span style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff' }}>Lake</span>
            <span style={{ fontSize: '22px', fontWeight: '800', color: '#ec4899' }}>B2B</span>
          </div>
          <p style={{ color: '#8e84a8', lineHeight: 1.6, marginBottom: '16px', maxWidth: '280px' }}>
            Enabling predictable enterprise pipeline with custom B2B contact intelligence, buying intent signals, and turnkey outreach campaigns.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontSize: '12px' }}>
            <ShieldCheck style={{ width: '16px', height: '16px' }} />
            <span>GDPR, CCPA & CAN-SPAM Certified</span>
          </div>
        </div>

        {/* Intelligence Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '14px', fontWeight: '700', marginBottom: '16px' }}>
            Intelligence Engine
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>
              <a
                href="#sample"
                onClick={(e) => { e.preventDefault(); onOpenExpert('free_sample'); }}
                style={{ color: '#9d94b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#9d94b8')}
              >
                Custom B2B Contact Lists
              </a>
            </li>
            <li>
              <a
                href="#intent"
                onClick={(e) => { e.preventDefault(); onOpenExpert('talk_expert'); }}
                style={{ color: '#9d94b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#9d94b8')}
              >
                Real-Time Intent Monitoring
              </a>
            </li>
            <li>
              <a
                href="#api"
                onClick={(e) => { e.preventDefault(); onOpenContactSales(); }}
                style={{ color: '#9d94b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#9d94b8')}
              >
                REST API Integration
              </a>
            </li>
            <li>
              <a
                href="#enrichment"
                onClick={(e) => { e.preventDefault(); onOpenContactSales(); }}
                style={{ color: '#9d94b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#9d94b8')}
              >
                Salesforce & HubSpot Sync
              </a>
            </li>
          </ul>
        </div>

        {/* Growth Solutions */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '14px', fontWeight: '700', marginBottom: '16px' }}>
            Growth Solutions
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>
              <a
                href="#abm"
                onClick={(e) => { e.preventDefault(); onOpenContactSales(); }}
                style={{ color: '#9d94b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#9d94b8')}
              >
                Account-Based Marketing (ABM)
              </a>
            </li>
            <li>
              <a
                href="#sdr"
                onClick={(e) => { e.preventDefault(); onOpenContactSales(); }}
                style={{ color: '#9d94b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#9d94b8')}
              >
                Managed Cold Outreach Execution
              </a>
            </li>
            <li>
              <a
                href="#email"
                onClick={(e) => { e.preventDefault(); onOpenExpert('talk_expert'); }}
                style={{ color: '#9d94b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#9d94b8')}
              >
                Deliverability & Inbox Infrastructure
              </a>
            </li>
            <li>
              <a
                href="#login"
                onClick={(e) => { e.preventDefault(); onOpenLogin(); }}
                style={{ color: '#9d94b8', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#c084fc')}
                onMouseLeave={(e) => (e.target.style.color = '#9d94b8')}
              >
                Portal Sign In
              </a>
            </li>
          </ul>
        </div>

        {/* Corporate & Support */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '14px', fontWeight: '700', marginBottom: '16px' }}>
            Headquarters & Support
          </h4>
          <p style={{ color: '#8e84a8', lineHeight: 1.6, marginBottom: '12px' }}>
            LakeB2B Global Operations<br />
            100 Enterprise Way, Suite 400<br />
            Austin, TX 78701
          </p>
          <button
            onClick={onOpenContactSales}
            style={{
              background: 'transparent',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              color: '#d8b4fe',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(168, 85, 247, 0.15)';
              e.currentTarget.style.borderColor = '#c084fc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
            }}
          >
            Contact Global Sales
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '12px',
          color: '#6e6586',
        }}
      >
        <div>
          © {new Date().getFullYear()} LakeB2B Inc. All rights reserved. Enabling Growth Worldwide.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('SOC2 Type II and ISO 27001 verified.')}>
            Privacy & Compliance
          </span>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('Data accuracy SLA: 95% guaranteed.')}>
            Terms of Service
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ArrowUp style={{ width: '15px', height: '15px' }} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
