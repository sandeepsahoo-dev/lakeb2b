import React from 'react';
import { MessageCircle } from 'lucide-react';

/* ─── Compliance badge data ─── */
const complianceBadges = [
  {
    name: 'CCPA',
    svg: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '52px', height: '52px' }}>
        <circle cx="28" cy="28" r="26" stroke="#1a6b3c" strokeWidth="2" fill="#e8f5ee" />
        <circle cx="28" cy="28" r="21" stroke="#2d9254" strokeWidth="1.2" fill="#d4eddc" />
        <text x="28" y="25" textAnchor="middle" fill="#1a5c32" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="800" letterSpacing="0.04em">CCPA</text>
        <text x="28" y="36" textAnchor="middle" fill="#2d8a4e" fontFamily="'Inter', sans-serif" fontSize="6" fontWeight="600">COMPLIANT</text>
      </svg>
    ),
  },
  {
    name: 'GDPR',
    svg: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '52px', height: '52px' }}>
        <circle cx="28" cy="28" r="26" stroke="#1a4d8c" strokeWidth="2" fill="#e6eef8" />
        <circle cx="28" cy="28" r="21" stroke="#2b6cb0" strokeWidth="1.2" fill="#d0def0" />
        <circle cx="28" cy="20" r="4" fill="none" stroke="#1a4d8c" strokeWidth="1.5" />
        <path d="M20 24 C20 24 22 30 28 30 C34 30 36 24 36 24" stroke="#1a4d8c" strokeWidth="1.5" fill="none" />
        <text x="28" y="42" textAnchor="middle" fill="#1a4d8c" fontFamily="'Inter', sans-serif" fontSize="8" fontWeight="800" letterSpacing="0.05em">GDPR</text>
      </svg>
    ),
  },
  {
    name: 'Healthcare Compliance',
    svg: (
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '52px', height: '52px' }}>
        <circle cx="28" cy="28" r="26" stroke="#1a4d8c" strokeWidth="2" fill="#e6eef8" />
        <circle cx="28" cy="28" r="21" stroke="#2b6cb0" strokeWidth="1.2" fill="#d0def0" />
        {/* Caduceus-style medical symbol */}
        <line x1="28" y1="14" x2="28" y2="42" stroke="#1a4d8c" strokeWidth="1.8" />
        <line x1="22" y1="18" x2="34" y2="18" stroke="#1a4d8c" strokeWidth="1.5" />
        <path d="M22 22 Q28 28 34 22" stroke="#1a4d8c" strokeWidth="1.2" fill="none" />
        <path d="M22 28 Q28 34 34 28" stroke="#1a4d8c" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    name: 'ICA',
    svg: (
      <svg viewBox="0 0 120 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '110px', height: '48px' }}>
        <rect x="1" y="1" width="118" height="50" rx="6" fill="#f0f4f8" stroke="#c5d3e0" strokeWidth="1" />
        <text x="10" y="22" fill="#1a3a5c" fontFamily="'Inter', sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.02em">ICA</text>
        <line x1="44" y1="8" x2="44" y2="44" stroke="#c5d3e0" strokeWidth="1" />
        <text x="52" y="18" fill="#3a5a7a" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" letterSpacing="0.03em">INTERNATIONAL</text>
        <text x="52" y="28" fill="#3a5a7a" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" letterSpacing="0.03em">COMPLIANCE</text>
        <text x="52" y="38" fill="#3a5a7a" fontFamily="'Inter', sans-serif" fontSize="7" fontWeight="700" letterSpacing="0.03em">ASSOCIATION</text>
      </svg>
    ),
  },
  {
    name: 'Trustpilot',
    svg: (
      <svg viewBox="0 0 140 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '130px', height: '48px' }}>
        {/* Trustpilot star */}
        <polygon points="12,6 14.5,13 22,13 16,17.5 18,25 12,20.5 6,25 8,17.5 2,13 9.5,13" fill="#00b67a" />
        <text x="28" y="18" fill="#1a1a2e" fontFamily="'Inter', sans-serif" fontSize="13" fontWeight="700">Trustpilot</text>
        {/* Green rating boxes */}
        <rect x="4" y="30" width="22" height="14" rx="2" fill="#00b67a" />
        <polygon points="15,33 16,36 19,36 16.5,38 17.5,41 15,39 12.5,41 13.5,38 11,36 14,36" fill="#fff" />
        <rect x="28" y="30" width="22" height="14" rx="2" fill="#00b67a" />
        <polygon points="39,33 40,36 43,36 40.5,38 41.5,41 39,39 36.5,41 37.5,38 35,36 38,36" fill="#fff" />
        <rect x="52" y="30" width="22" height="14" rx="2" fill="#00b67a" />
        <polygon points="63,33 64,36 67,36 64.5,38 65.5,41 63,39 60.5,41 61.5,38 59,36 62,36" fill="#fff" />
        <rect x="76" y="30" width="22" height="14" rx="2" fill="#00b67a" />
        <polygon points="87,33 88,36 91,36 88.5,38 89.5,41 87,39 84.5,41 85.5,38 83,36 86,36" fill="#fff" />
        <rect x="100" y="30" width="22" height="14" rx="2" fill="#00b67a" />
        <polygon points="111,33 112,36 115,36 112.5,38 113.5,41 111,39 108.5,41 109.5,38 107,36 110,36" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'G2 Rating',
    svg: (
      <svg viewBox="0 0 140 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '130px', height: '48px' }}>
        {/* G2 logo circle */}
        <circle cx="18" cy="26" r="16" fill="#ff492c" />
        <text x="18" y="32" textAnchor="middle" fill="#ffffff" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="800">G</text>
        {/* Stars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <polygon
            key={i}
            points={`${44 + i * 18},14 ${46.5 + i * 18},20 ${53 + i * 18},20 ${48 + i * 18},24 ${49.5 + i * 18},30 ${44 + i * 18},26 ${38.5 + i * 18},30 ${40 + i * 18},24 ${35 + i * 18},20 ${41.5 + i * 18},20`}
            fill="#f5a623"
          />
        ))}
        <text x="44" y="46" fill="#3a3a4a" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="700">4.7/5 on G2</text>
      </svg>
    ),
  },
];

const DataTrustSection = () => {
  return (
    <>
      {/* ═══ Section 1: Compliance & Trust ═══ */}
      <section
        style={{
          width: '100%',
          background: 'linear-gradient(180deg, #faf5f0 0%, #f5ede6 50%, #f0e8e0 100%)',
          padding: '80px 0 70px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle decorative top edge */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, transparent, rgba(126, 34, 206, 0.15), rgba(236, 72, 153, 0.1), transparent)',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px',
          }}
        >
          {/* Main paragraph */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(16px, 1.5vw, 19px)',
              fontWeight: '400',
              lineHeight: 1.75,
              color: '#2a2a3a',
              maxWidth: '780px',
              marginBottom: '48px',
            }}
          >
            At LakeB2B, we build the contact data your sales and marketing teams can trust.
            <br />
            Then we put it to work, running multi-channel campaigns that turn that data into real, qualified
            demand. Right people. Right message. Full pipeline.
          </p>

          {/* Compliance Heading */}
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: 'clamp(16px, 1.3vw, 20px)',
              fontWeight: '700',
              color: '#1a1a2e',
              marginBottom: '32px',
              letterSpacing: '-0.01em',
            }}
          >
            Built on Compliance. Backed by Standards.
          </h3>

          {/* Compliance Badges Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
              flexWrap: 'wrap',
            }}
          >
            {complianceBadges.map((badge) => (
              <div
                key={badge.name}
                title={badge.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, filter 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                }}
              >
                {badge.svg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section 2: Every Data Problem ═══ */}
      <section
        style={{
          width: '100%',
          background: 'linear-gradient(180deg, #f0e8e0 0%, #f7f0ea 30%, #faf6f2 100%)',
          padding: '80px 0 90px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle separator */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '40px',
            right: '40px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 40px',
            position: 'relative',
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontSize: 'clamp(28px, 3.2vw, 44px)',
              fontWeight: '600',
              lineHeight: 1.25,
              color: '#1a1a2e',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Every data problem
            <br />
            starts somewhere.
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(14px, 1.2vw, 17px)',
              fontWeight: '400',
              lineHeight: 1.7,
              color: '#5a5a6e',
              maxWidth: '680px',
              fontStyle: 'italic',
            }}
          >
            Sometimes the list does not exist yet. Sometimes it exists and half of it is out of date. Tell us which and we
            will take it from there.
          </p>
        </div>

        {/* Bottom-left floating icon (circular clock/timer) */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1a1a2e, #2a2a4a)',
              border: '2px solid rgba(100, 100, 140, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a0a0c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
        </div>

        {/* Bottom-right chat bubble */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 6px 24px rgba(37, 99, 235, 0.35)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(37, 99, 235, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 99, 235, 0.35)';
            }}
          >
            <MessageCircle style={{ width: '22px', height: '22px', color: '#ffffff' }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DataTrustSection;
