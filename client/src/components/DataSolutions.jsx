import React, { useState } from 'react';
import { Grid3X3, Code2, ShieldCheck, Layers, KeyRound } from 'lucide-react';

/* ─── Tab Data ─── */
const tabs = [
  {
    id: 'custom_b2b',
    label: 'Custom B2B Data',
    icon: <Grid3X3 style={{ width: '18px', height: '18px' }} />,
    tagline: 'CUSTOM B2B DATA',
    heading: "Can't find the right buyers?",
    description:
      'Build the exact audience you need. Get the email IDs, contact numbers, and buying signals that match your target.',
    subtext: 'No generic lists. Just precision data built for your outreach.',
    cta: 'LEARN MORE',
    // Center visual: professional person with data category labels
    visualLabels: ['Firmographic', 'Technographic', 'Demographic', 'Behavioral'],
    personColor: '#4a90d9',
  },
  {
    id: 'data_apis',
    label: 'Data APIs',
    icon: <Code2 style={{ width: '18px', height: '18px' }} />,
    tagline: 'DATA APIs',
    heading: 'Need more information about prospects?,',
    description:
      'Access company, job, contact, and intent data directly through APIs. Ensure your CRM has the latest, actionable B2B data.',
    subtext: 'No spreadsheets. No waiting. Just data flowing into your stack.',
    cta: 'EXPLORE APIs',
    visualLabels: ['REST API', 'Webhooks', 'CRM Sync', 'Real-Time'],
    personColor: '#6c5ce7',
  },
  {
    id: 'data_hygiene',
    label: 'Data Hygiene',
    icon: <ShieldCheck style={{ width: '18px', height: '18px' }} />,
    tagline: 'DATA HYGIENE',
    heading: 'Is bad data costing you pipeline?',
    description:
      'Cleanse, verify, and deduplicate your existing database. Remove bounces, fix formatting, and fill in the gaps.',
    subtext: 'Clean data in. Better outcomes out.',
    cta: 'CLEAN MY DATA',
    visualLabels: ['Verification', 'Deduplication', 'Standardization', 'Validation'],
    personColor: '#00b894',
  },
  {
    id: 'data_enrichment',
    label: 'Data Enrichment',
    icon: <Layers style={{ width: '18px', height: '18px' }} />,
    tagline: 'DATA ENRICHMENT',
    heading: 'Incomplete records slowing you down?',
    description:
      'Append missing fields — direct dials, verified emails, firmographics, technographics, and intent data.',
    subtext: 'Turn thin records into full buyer profiles.',
    cta: 'ENRICH NOW',
    visualLabels: ['Firmographics', 'Technographics', 'Intent Data', 'Contacts'],
    personColor: '#e17055',
  },
  {
    id: 'data_licensing',
    label: 'Data Licensing',
    icon: <KeyRound style={{ width: '18px', height: '18px' }} />,
    tagline: 'DATA LICENSING',
    heading: 'Need data at scale for your platform?',
    description:
      "License LakeB2B's entire database for your own products, analytics platforms, or reseller programs.",
    subtext: 'Enterprise-grade data. Your brand. Your terms.',
    cta: 'GET A LICENSE',
    visualLabels: ['Bulk Access', 'White Label', 'Analytics', 'Reseller'],
    personColor: '#fdcb6e',
  },
];

/* ─── Center Visual Component ─── */
const CenterVisual = ({ tab }) => {
  const colors = {
    custom_b2b: { ring: '#7c3aed', accent: '#a855f7' },
    data_apis: { ring: '#6c5ce7', accent: '#a29bfe' },
    data_hygiene: { ring: '#00b894', accent: '#55efc4' },
    data_enrichment: { ring: '#e17055', accent: '#fab1a0' },
    data_licensing: { ring: '#fdcb6e', accent: '#ffeaa7' },
  };

  const c = colors[tab.id] || colors.custom_b2b;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '380px',
        height: '380px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${c.ring}18, transparent 70%)`,
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />

      {/* Person illustration (SVG) */}
      <svg
        viewBox="0 0 300 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          zIndex: 1,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Body / Torso */}
        <ellipse cx="150" cy="310" rx="80" ry="30" fill="#e8e0f0" opacity="0.3" />

        {/* Shirt */}
        <path
          d="M100 210 C100 190 120 175 150 175 C180 175 200 190 200 210 L200 280 C200 285 195 290 190 290 L110 290 C105 290 100 285 100 280 Z"
          fill="#f0f0f5"
          stroke="#d0d0e0"
          strokeWidth="1"
        />
        {/* Collar */}
        <path d="M130 175 L150 195 L170 175" fill="none" stroke="#c0c0d0" strokeWidth="1.5" />
        {/* Badge/Lanyard */}
        <line x1="150" y1="195" x2="150" y2="240" stroke={c.ring} strokeWidth="2" />
        <rect x="140" y="238" width="20" height="26" rx="3" fill="#ffffff" stroke={c.ring} strokeWidth="1.5" />
        <rect x="144" y="244" width="12" height="3" rx="1" fill={c.ring} opacity="0.4" />
        <rect x="144" y="250" width="8" height="3" rx="1" fill={c.ring} opacity="0.3" />

        {/* Head */}
        <circle cx="150" cy="140" r="42" fill="#c5a882" />
        {/* Hair / beard (older professional) */}
        <path
          d="M108 130 C108 100 125 85 150 85 C175 85 192 100 192 130"
          fill="#8a8a8a"
          stroke="none"
        />
        <path
          d="M120 165 C125 175 140 180 150 180 C160 180 175 175 180 165"
          fill="none"
          stroke="#a08a6a"
          strokeWidth="1.5"
        />
        {/* Eyes */}
        <circle cx="136" cy="138" r="3" fill="#2d2d2d" />
        <circle cx="164" cy="138" r="3" fill="#2d2d2d" />
        {/* Smile */}
        <path d="M140 155 Q150 162 160 155" fill="none" stroke="#7a6a5a" strokeWidth="1.5" strokeLinecap="round" />
        {/* Beard */}
        <path
          d="M125 158 C130 172 145 178 150 178 C155 178 170 172 175 158"
          fill="#7a7a7a"
          opacity="0.5"
        />

        {/* Floating data labels around the person */}
        {tab.visualLabels.map((label, i) => {
          const positions = [
            { x: 30, y: 260, align: 'end' },
            { x: 175, y: 260, align: 'start' },
            { x: 20, y: 300, align: 'end' },
            { x: 180, y: 300, align: 'start' },
          ];
          const pos = positions[i] || positions[0];
          return (
            <g key={label}>
              <rect
                x={pos.align === 'end' ? pos.x - 90 : pos.x}
                y={pos.y - 14}
                width="110"
                height="28"
                rx="14"
                fill="#ffffff"
                stroke={c.ring}
                strokeWidth="1.2"
                filter="url(#labelShadow)"
              />
              <text
                x={pos.align === 'end' ? pos.x - 35 : pos.x + 55}
                y={pos.y + 4}
                textAnchor="middle"
                fill={c.ring}
                fontFamily="'Inter', sans-serif"
                fontSize="10"
                fontWeight="600"
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Center hub circle */}
        <circle cx="150" cy="298" r="18" fill={c.ring} opacity="0.12" />
        <circle cx="150" cy="298" r="12" fill={c.ring} opacity="0.25" stroke={c.ring} strokeWidth="1.5" />
        {/* Refresh icon in hub */}
        <path
          d="M145 295 A6 6 0 0 1 155 295"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M155 301 A6 6 0 0 1 145 301"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Small icons next to hub */}
        <circle cx="130" cy="318" r="10" fill={c.ring} opacity="0.18" />
        <circle cx="170" cy="318" r="10" fill={c.ring} opacity="0.18" />

        {/* Shadow filter for labels */}
        <defs>
          <filter id="labelShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#00000015" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

/* ─── Main Component ─── */
const DataSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];

  return (
    <section
      style={{
        width: '100%',
        background: 'linear-gradient(180deg, #faf6f2 0%, #ffffff 40%, #fdfbf9 100%)',
        padding: '0 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        {/* 3-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr 1fr',
            gap: '40px',
            alignItems: 'start',
            minHeight: '440px',
          }}
        >
          {/* ─── Left: Tab Navigation ─── */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              paddingTop: '10px',
            }}
          >
            {tabs.map((tab, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 18px',
                    background: 'transparent',
                    border: 'none',
                    borderLeft: isActive
                      ? '3px solid #7c3aed'
                      : '3px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14.5px',
                    fontWeight: isActive ? '600' : '400',
                    color: isActive ? '#7c3aed' : '#4a4a5a',
                    textAlign: 'left',
                    textDecoration: isActive ? 'underline' : 'none',
                    textUnderlineOffset: '3px',
                    borderRadius: '0',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#5b21b6';
                      e.currentTarget.style.backgroundColor = '#f5f0ff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#4a4a5a';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <span
                    style={{
                      color: isActive ? '#7c3aed' : '#8e84a8',
                      flexShrink: 0,
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* ─── Center: Visual / Illustration ─── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 0',
            }}
          >
            <CenterVisual tab={currentTab} />
          </div>

          {/* ─── Right: Content Panel ─── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '20px 0',
            }}
          >
            {/* Tag / Label */}
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#6b7280',
                marginBottom: '12px',
              }}
            >
              {currentTab.tagline}
            </span>

            {/* Heading */}
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: 'clamp(22px, 2.2vw, 30px)',
                fontWeight: '700',
                lineHeight: 1.25,
                color: '#1a1a2e',
                marginBottom: '18px',
                letterSpacing: '-0.01em',
              }}
            >
              {currentTab.heading}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14.5px',
                fontWeight: '400',
                lineHeight: 1.7,
                color: '#4a4a5a',
                marginBottom: '14px',
                maxWidth: '380px',
              }}
            >
              {currentTab.description}
            </p>

            {/* Subtext */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: 1.6,
                color: '#6b7280',
                marginBottom: '28px',
                maxWidth: '380px',
              }}
            >
              {currentTab.subtext}
            </p>

            {/* CTA Button */}
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'fit-content',
                padding: '14px 32px',
                background: '#1a1a2e',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '12.5px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2d2d4a';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1a1a2e';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
              }}
            >
              {currentTab.cta}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DataSolutions;
