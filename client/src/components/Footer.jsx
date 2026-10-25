import React from 'react';

const footerNav = [
  {
    title: 'DATA INTELLIGENCE',
    links: [
      'Company API',
      'People API',
      'Job API',
      'B2B Custom Data',
      'Healthcare Data',
      'Tech Install Data',
      'Browse By Geography',
      'Browse By Industry',
    ],
  },
  {
    title: 'SOLUTIONS',
    links: [
      'Enrichment',
      'Data Hygiene',
      'Appending',
      'Cleansing',
      'Email Campaign Management',
      'Webinars & Event Management',
      'Bespoke Growth Solutions',
      'Account Based Marketing',
      'GTM',
      'Experience Design',
    ],
  },
  {
    title: 'INDUSTRIES',
    links: [
      'Healthcare',
      'Technology',
      'Education',
      'Automotive',
      'Oil and Gas',
      'Manufacturing',
      'Pharmaceutical',
      'Medical Devices',
    ],
  },
  {
    title: 'ABOUT US',
    links: [
      'About LakeB2B',
      'Reseller Partner',
      'Customers',
      'News & Events',
      'Careers',
      'Contact Us',
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      'Case Studies',
      'Testimonials',
      'News',
      'Whitepapers',
      'Blog',
      'Marketing Tools',
      'Videos',
    ],
  },
];

const legalLinks = [
  'Privacy Policy',
  'Data Security Policy',
  'CCPA Privacy Policy',
  'Do Not Sell My Data',
  'Do Not Call Compliance Policy',
];

const Footer = ({ onOpenContactSales, onOpenExpert, onOpenLogin }) => {
  const handleLinkClick = (name) => {
    if (name.toLowerCase().includes('contact')) {
      if (onOpenContactSales) onOpenContactSales();
    } else if (name.toLowerCase().includes('api') || name.toLowerCase().includes('data')) {
      if (onOpenExpert) onOpenExpert('talk_expert');
    } else {
      if (onOpenExpert) onOpenExpert('talk_expert');
    }
  };

  return (
    <footer
      id="main-footer"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '100px 40px 40px',
        fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* ─── Top 5-Column Navigation Grid ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '36px 24px',
            marginBottom: '50px',
          }}
        >
          {footerNav.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: '12.5px',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  margin: '0 0 16px 0',
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '9px',
                }}
              >
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() => handleLinkClick(link)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: '#94a3b8',
                        fontSize: '12px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'color 0.2s ease',
                        lineHeight: 1.35,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ─── Middle Section (Address, Newsletter, Badges) ─── */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.14)',
            paddingTop: '36px',
            paddingBottom: '36px',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.3fr 1.1fr',
            gap: '30px',
            alignItems: 'start',
          }}
        >
          {/* Left: Brand Logo & Addresses */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              {/* Colorful Dots Logo */}
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <circle cx="8" cy="8" r="4" fill="#f97316" />
                <circle cx="20" cy="8" r="4" fill="#ec4899" />
                <circle cx="14" cy="18" r="5" fill="#a855f7" />
                <circle cx="24" cy="22" r="4" fill="#06b6d4" />
              </svg>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>Lake</span>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#ec4899' }}>B2B</span>
            </div>

            <div
              style={{
                fontSize: '11px',
                color: '#94a3b8',
                lineHeight: 1.55,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div>
                8 The Green, Suite A
                <br />
                Dover, DE 19901
              </div>

              <div>
                9450 SW Gemini Drive, Suite 87797
                <br />
                Beaverton, OR 97008
                <br />
                United States
              </div>

              <div>
                <a
                  href="mailto:marketing@lakeb2b.com"
                  style={{ color: '#94a3b8', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                >
                  marketing@lakeb2b.com
                </a>
                <br />
                <a
                  href="tel:8003054466"
                  style={{ color: '#94a3b8', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                >
                  (800) 305-4466
                </a>
              </div>
            </div>
          </div>

          {/* Middle: Stay Connected & Follow Us */}
          <div>
            <h5
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                margin: '0 0 4px 0',
              }}
            >
              Stay connected
            </h5>
            <p
              style={{
                fontSize: '11.5px',
                color: '#94a3b8',
                margin: '0 0 14px 0',
                lineHeight: 1.4,
              }}
            >
              Get the latest LakeB2B and industry information delivered to your inbox.
            </p>

            <button
              type="button"
              onClick={() => onOpenContactSales && onOpenContactSales()}
              style={{
                backgroundColor: '#6d28d9',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '9px 18px',
                fontSize: '11.5px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                marginBottom: '20px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#5b21b6')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6d28d9')}
            >
              SUBSCRIBE NEWSLETTER
            </button>

            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                }}
              >
                Follow us
              </div>

              {/* Social Icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {['f', '𝕏', 'in', '▶', '●'].map((icon, i) => (
                  <button
                    key={i}
                    type="button"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'none',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s, background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ffffff';
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Awards & Compliance Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '18px',
              paddingTop: '8px',
            }}
          >
            {/* Spring 2025 Best in Industry Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                padding: '8px 12px',
                background: 'rgba(255, 255, 255, 0.03)',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '28px',
                  border: '1.5px solid #a855f7',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '9px',
                  fontWeight: 800,
                  color: '#a855f7',
                }}
              >
                ★
              </div>
              <div>
                <div
                  style={{
                    fontSize: '9px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#e2e8f0',
                  }}
                >
                  SPRING 2025
                </div>
                <div
                  style={{
                    fontSize: '8px',
                    color: '#94a3b8',
                    letterSpacing: '0.02em',
                  }}
                >
                  Best in Industry
                </div>
              </div>
            </div>

            {/* ICA / GDPR Compliance Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                padding: '8px 12px',
                background: 'rgba(255, 255, 255, 0.03)',
              }}
            >
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  border: '1.5px solid #38bdf8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8px',
                  color: '#38bdf8',
                }}
              >
                ★
              </div>
              <div>
                <div
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    color: '#ffffff',
                  }}
                >
                  ICA
                </div>
                <div
                  style={{
                    fontSize: '6.5px',
                    color: '#94a3b8',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  International Compliance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar: Copyright & Legal Policies ─── */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            fontSize: '11px',
            color: '#64748b',
          }}
        >
          <div>© 2026 LakeB2B All Rights Reserved.</div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            {legalLinks.map((item) => (
              <button
                key={item}
                type="button"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#64748b',
                  fontSize: '11px',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
