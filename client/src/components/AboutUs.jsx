import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Handshake, Tag, Newspaper, Star } from 'lucide-react';

const iconBox = {
  width: '44px',
  height: '44px',
  borderRadius: '10px',
  backgroundColor: '#f0f0f8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#6b21a8',
  flexShrink: 0,
};

const linkStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '14px',
  padding: '14px 16px',
  borderRadius: '10px',
  textDecoration: 'none',
  color: '#111827',
  transition: 'background 0.15s ease',
};

const AboutUs = ({ onClose }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 12px 48px rgba(0,0,0,0.18)',
        width: '520px',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
        padding: '12px',
      }}
    >
      {/* About LakeB2B – full width top row */}
      <Link
        to="/about/about-lakeb2b"
        onClick={onClose}
        style={linkStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <div style={iconBox}><Users size={20} /></div>
        <div>
          <div style={{ fontWeight: '700', fontSize: '15px', color: '#111827', display: 'flex', alignItems: 'center', gap: '8px' }}>
            About LakeB2B
            <span style={{ fontSize: '12px', color: '#7c3aed' }}>›</span>
          </div>
          <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>
            Discover LakeB2B's journey as a data-driven solutions pioneer.
          </div>
        </div>
      </Link>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #f3f4f6', margin: '4px 0' }} />

      {/* 2-col grid: Reseller Partner | News & Events, Whitelabel | Customers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* Reseller Partner */}
        <Link
          to="/about/reseller-partner"
          onClick={onClose}
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={iconBox}><Handshake size={20} /></div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '14px', color: '#111827' }}>Reseller Partner</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>
              Build relationships with AI-enhanced data reseller programs.
            </div>
          </div>
        </Link>

        {/* News & Events */}
        <Link
          to="/about/news-and-events"
          onClick={onClose}
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={iconBox}><Newspaper size={20} /></div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '14px', color: '#111827' }}>News &amp; Events</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>
              Stay updated on strategies to convert leads into revenue.
            </div>
          </div>
        </Link>

        {/* Whitelabel */}
        <Link
          to="/about/whitelabel"
          onClick={onClose}
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={iconBox}><Tag size={20} /></div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '14px', color: '#111827' }}>Whitelabel</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>
              See how industries use databases to close deals faster.
            </div>
          </div>
        </Link>

        {/* Customers */}
        <Link
          to="/about/customers"
          onClick={onClose}
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={iconBox}><Star size={20} /></div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '14px', color: '#111827' }}>Customers</div>
            <div style={{ fontSize: '12.5px', color: '#6b7280', marginTop: '3px', lineHeight: 1.4 }}>
              See how industries use databases to close deals faster.
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
