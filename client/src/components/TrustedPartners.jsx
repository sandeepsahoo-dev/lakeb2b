import React from 'react';

const partnerBrands = [
  { name: 'Johnson & Johnson', svg: (
    <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <text x="0" y="28" fill="#b0a6c8" fontFamily="'Georgia', serif" fontSize="18" fontStyle="italic" fontWeight="400">Johnson</text>
      <text x="78" y="28" fill="#d4c6f0" fontFamily="'Georgia', serif" fontSize="18" fontWeight="700">&amp;</text>
      <text x="93" y="28" fill="#b0a6c8" fontFamily="'Georgia', serif" fontSize="18" fontStyle="italic" fontWeight="400">Johnson</text>
    </svg>
  )},
  { name: 'Mayo Clinic', svg: (
    <svg viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '30px', width: 'auto' }}>
      <rect x="0" y="6" width="28" height="28" rx="4" stroke="#8e84a8" strokeWidth="1.5" fill="none" />
      <path d="M8 20 L14 12 L20 20 L14 28 Z" fill="#8e84a8" opacity="0.6" />
      <text x="36" y="18" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="500" letterSpacing="0.05em">MAYO</text>
      <text x="36" y="32" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="11" fontWeight="500" letterSpacing="0.05em">CLINIC</text>
    </svg>
  )},
  { name: 'Medtronic', svg: (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <text x="0" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="600" letterSpacing="-0.02em">Medtronic</text>
    </svg>
  )},
  { name: 'NetApp', svg: (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <rect x="0" y="10" width="4" height="20" fill="#8e84a8" rx="1" />
      <rect x="6" y="14" width="4" height="16" fill="#8e84a8" rx="1" />
      <text x="16" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="700" letterSpacing="-0.02em">NetApp</text>
    </svg>
  )},
  { name: 'Novartis', svg: (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <circle cx="12" cy="20" r="8" stroke="#8e84a8" strokeWidth="1.5" fill="none" />
      <path d="M12 14 L12 26 M8 17 L16 23" stroke="#8e84a8" strokeWidth="1.2" />
      <text x="28" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="500" letterSpacing="0.04em">NOVARTIS</text>
    </svg>
  )},
  { name: 'Pfizer', svg: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <path d="M6 28 C6 28 10 10 18 10 C22 10 22 18 18 20 C14 22 10 20 10 20" stroke="#8e84a8" strokeWidth="2" fill="none" />
      <text x="26" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="600">Pfizer</text>
    </svg>
  )},
  { name: 'Microsoft', svg: (
    <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <rect x="0" y="10" width="9" height="9" fill="#8e84a8" opacity="0.7" />
      <rect x="11" y="10" width="9" height="9" fill="#8e84a8" opacity="0.5" />
      <rect x="0" y="21" width="9" height="9" fill="#8e84a8" opacity="0.5" />
      <rect x="11" y="21" width="9" height="9" fill="#8e84a8" opacity="0.7" />
      <text x="28" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="19" fontWeight="500">Microsoft</text>
    </svg>
  )},
  { name: 'Oracle', svg: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <text x="0" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="22" fontWeight="700" letterSpacing="0.02em">ORACLE</text>
    </svg>
  )},
  { name: 'Salesforce', svg: (
    <svg viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <path d="M18 28 C8 28 2 22 2 16 C2 10 8 6 16 6 C20 6 24 8 26 12 C28 8 34 6 38 10 C42 6 48 8 48 14 C48 14 52 14 52 20 C52 26 46 28 42 28 Z" fill="none" stroke="#8e84a8" strokeWidth="1.5" />
      <text x="58" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="600">salesforce</text>
    </svg>
  )},
  { name: 'SAP', svg: (
    <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <text x="0" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="24" fontWeight="700" letterSpacing="0.04em">SAP</text>
    </svg>
  )},
  { name: 'IBM', svg: (
    <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <text x="0" y="28" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="24" fontWeight="700" letterSpacing="0.08em">IBM</text>
    </svg>
  )},
  { name: 'Cisco', svg: (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '28px', width: 'auto' }}>
      <g opacity="0.7">
        <rect x="10" y="4" width="2.5" height="12" rx="1" fill="#8e84a8" />
        <rect x="18" y="2" width="2.5" height="14" rx="1" fill="#8e84a8" />
        <rect x="26" y="0" width="2.5" height="16" rx="1" fill="#8e84a8" />
        <rect x="34" y="2" width="2.5" height="14" rx="1" fill="#8e84a8" />
        <rect x="42" y="4" width="2.5" height="12" rx="1" fill="#8e84a8" />
      </g>
      <text x="6" y="32" fill="#b0a6c8" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.06em">CISCO</text>
    </svg>
  )},
];

const TrustedPartners = () => {
  // Duplicate brands for seamless infinite scroll
  const allBrands = [...partnerBrands, ...partnerBrands];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        background: 'linear-gradient(180deg, #05020d 0%, #0a0520 30%, #110a30 60%, #0d0622 100%)',
        paddingTop: '70px',
        paddingBottom: '60px',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top divider glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2), transparent)',
        }}
      />

      {/* Section Title */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          marginBottom: '50px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 3vw, 42px)',
            fontWeight: '700',
            lineHeight: 1.3,
            color: '#ffffff',
            marginBottom: '0',
          }}
        >
          <span style={{ fontWeight: '800' }}>24 Years</span>{' '}
          <span style={{ fontWeight: '400', color: '#c4bcd8' }}>of</span>{' '}
          Trusted Partnerships
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(15px, 1.3vw, 19px)',
            fontWeight: '400',
            color: '#8e84a8',
            marginTop: '12px',
            lineHeight: 1.5,
          }}
        >
          with Top-Tier Global Enterprises Across 200+ Industries.
        </p>
      </div>

      {/* Marquee / Infinite Scroll Track */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            width: 'max-content',
            animation: 'marqueeScroll 35s linear infinite',
          }}
        >
          {allBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 48px',
                minWidth: '180px',
                opacity: 0.65,
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                cursor: 'default',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.65';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle glow line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.25), transparent)',
        }}
      />

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedPartners;
