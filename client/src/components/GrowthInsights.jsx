import React from 'react';
import { ArrowRight } from 'lucide-react';

/* ─── Growth Insights Articles ─── */
const insights = [
  {
    id: 1,
    tag: 'Whitepaper',
    title: 'The 10-Step Blueprint to Winning and Retaining Strategic Customers',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    fallbackGrad: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    readTime: '8 min read',
  },
  {
    id: 2,
    tag: 'Blog',
    title: 'Buying Email Lists in 2026: Is It Legal, What It Costs & How to Buy Safely',
    image:
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80',
    fallbackGrad: 'linear-gradient(135deg, #091e3a 0%, #030712 100%)',
    readTime: '6 min read',
  },
  {
    id: 3,
    tag: 'Blog',
    title: 'How to Generate B2B Leads in 2026: 12 Proven Strategies (That Actually Convert)',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    fallbackGrad: 'linear-gradient(135deg, #1b0a2a 0%, #070314 100%)',
    readTime: '10 min read',
  },
];

const GrowthInsights = ({ onOpenContactSales, onOpenExpert }) => {
  const handleItemClick = () => {
    if (onOpenExpert) {
      onOpenExpert('free_sample');
    } else if (onOpenContactSales) {
      onOpenContactSales();
    }
  };

  return (
    <section
      id="growth-insights"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '60px 0 95px',
        position: 'relative',
        color: '#0f172a',
        fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(400px, 1.7fr)',
            gap: 'clamp(36px, 5vw, 64px)',
            alignItems: 'start',
          }}
        >
          {/* ════ Left Column: Headline, Description & CTA ════ */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <h2
              style={{
                fontSize: 'clamp(30px, 3.4vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#111827',
                letterSpacing: '-0.025em',
                margin: '0 0 16px 0',
              }}
            >
              Insights That Power B2B
              <br />
              Growth
            </h2>

            <p
              style={{
                fontSize: 'clamp(14px, 1.2vw, 15.5px)',
                color: '#475569',
                lineHeight: 1.55,
                margin: '0 0 28px 0',
                maxWidth: '400px',
                fontWeight: 400,
              }}
            >
              From insight to action—strategies that drive real B2B results.
            </p>

            <button
              type="button"
              onClick={handleItemClick}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: '#6d28d9',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'gap 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = '10px';
                e.currentTarget.style.color = '#4c1d95';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = '6px';
                e.currentTarget.style.color = '#6d28d9';
              }}
            >
              <span>EXPLORE GROWTH INSIGHTS</span>
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </button>
          </div>

          {/* ════ Right Column: Articles Stack ════ */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {insights.map((item, idx) => (
              <div
                key={item.id}
                onClick={handleItemClick}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '190px 1fr',
                  gap: '24px',
                  alignItems: 'center',
                  padding: idx === 0 ? '0 0 28px' : '28px 0',
                  borderBottom:
                    idx < insights.length - 1 ? '1px solid #e2e8f0' : 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.05)';
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = '#6d28d9';
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                  const title = e.currentTarget.querySelector('h3');
                  if (title) title.style.color = '#111827';
                }}
              >
                {/* Thumbnail Image */}
                <div
                  style={{
                    position: 'relative',
                    width: '190px',
                    height: '110px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    backgroundColor: '#0f172a',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                </div>

                {/* Article Content */}
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#475569',
                      marginBottom: '6px',
                    }}
                  >
                    {item.tag}
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(16px, 1.4vw, 19px)',
                      fontWeight: 600,
                      color: '#111827',
                      lineHeight: 1.35,
                      margin: 0,
                      transition: 'color 0.2s ease',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthInsights;
