import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

/* ─── Success Stories Data ─── */
const stories = [
  {
    id: 1,
    title:
      'How LakeB2B Empowered a Leading University to Streamline Student Engagement & Enhance Junior Year Success',
    industry: 'Education',
    tagColor: '#ea580c',
    tagBg: '#fff1ee',
    bullets: [
      { text: 'Targeted database of ', bold: '8,500', after: ' student contacts' },
      { text: 'Successfully processed and enriched over ', bold: '716,000', after: ' total records' },
      { text: 'Identified ', bold: '4,500+', after: ' verified decision-makers' },
      { text: 'Delivered up to ', bold: '18,000', after: ' new records' },
      {
        text: 'Optimized deliverability by remediating ',
        bold: '124,000+',
        after: ' invalid email addresses',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'University student smiling outdoors on campus',
    caseStudyUrl: '#',
  },
  {
    id: 2,
    title: 'Data Enrichment and Global Outreach for Vacation Rental Management',
    industry: 'Travel',
    tagColor: '#c026d3',
    tagBg: '#fae8ff',
    bullets: [
      {
        text: 'Enriched over ',
        bold: '250,000',
        after: ' property manager and host profiles with verified direct dials',
      },
      {
        text: 'Boosted outreach response rates by ',
        bold: '3.8x',
        after: ' through verified property tiering data',
      },
      {
        text: 'Standardized international location records across ',
        bold: '42',
        after: ' countries',
      },
      {
        text: 'Decreased bounce rate from 14.2% to under ',
        bold: '1.1%',
        after: ' using automated hygiene protocols',
      },
      {
        text: 'Generated ',
        bold: '$4.2M',
        after: ' in net new annualized booking pipeline',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Luxury vacation rental and travel destination',
    caseStudyUrl: '#',
  },
  {
    id: 3,
    title:
      'Generated Qualified Forex Traders & Funded Accounts on a CPL, CPA & CPQL Model across U.S. and APAC',
    industry: 'Finance',
    tagColor: '#0284c7',
    tagBg: '#e0f2fe',
    bullets: [
      {
        text: 'Sourced ',
        bold: '45,000+',
        after: ' accredited high-net-worth individual investor leads',
      },
      {
        text: 'Delivered ',
        bold: '32%',
        after: ' funded account conversion rate across U.S. and APAC corridors',
      },
      {
        text: 'Implemented real-time algorithmic lead validation and KYC compliance verification',
        bold: '',
        after: '',
      },
      {
        text: 'Reduced average Cost Per Qualified Lead (CPQL) by ',
        bold: '44%',
        after: '',
      },
      {
        text: 'Scaled monthly deposit volume past ',
        bold: '$18M',
        after: ' within two fiscal quarters',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Financial trading market dashboards and growth charts',
    caseStudyUrl: '#',
  },
];

const SuccessStories = ({ onOpenContactSales, onOpenExpert }) => {
  // Currently expanded story (default is story 1)
  const [expandedId, setExpandedId] = useState(1);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleReadStory = (e, story) => {
    e.stopPropagation();
    if (onOpenExpert) {
      onOpenExpert('talk_expert', story.industry);
    } else if (onOpenContactSales) {
      onOpenContactSales();
    }
  };

  return (
    <section
      id="success-stories"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '75px 0 95px',
        position: 'relative',
        color: '#0f172a',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* ─── Top Header ─── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '42px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#111827',
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          >
            Success Stories
          </h2>

          <button
            type="button"
            onClick={() => onOpenContactSales && onOpenContactSales()}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              color: '#6d28d9',
              fontSize: '12.5px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'gap 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.gap = '9px';
              e.currentTarget.style.color = '#5b21b6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.gap = '6px';
              e.currentTarget.style.color = '#6d28d9';
            }}
          >
            <span>EXPLORE ALL SUCCESS STORIES</span>
            <ArrowRight style={{ width: '15px', height: '15px' }} />
          </button>
        </div>

        {/* ─── Expandable Accordion List ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {stories.map((story) => {
            const isExpanded = expandedId === story.id;

            return (
              <div
                key={story.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: isExpanded
                    ? '0 12px 30px -5px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.03)'
                    : '0 2px 6px rgba(0, 0, 0, 0.02)',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                {/* ── Accordion Header Bar ── */}
                <div
                  onClick={() => toggleAccordion(story.id)}
                  style={{
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    cursor: 'pointer',
                    background: '#ffffff',
                    borderBottom: isExpanded ? '1px solid #f1f5f9' : 'none',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isExpanded) e.currentTarget.style.backgroundColor = '#fafafa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                >
                  <h3
                    style={{
                      fontSize: 'clamp(15px, 1.35vw, 17px)',
                      fontWeight: 700,
                      color: '#111827',
                      margin: 0,
                      lineHeight: 1.4,
                      flex: 1,
                    }}
                  >
                    {story.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                    {/* Industry Tag Badge */}
                    <span
                      style={{
                        backgroundColor: story.tagBg,
                        color: story.tagColor,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {story.industry}
                    </span>

                    {/* Chevron Indicator */}
                    <div
                      style={{
                        color: '#94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'transform 0.3s ease',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <ChevronDown style={{ width: '18px', height: '18px' }} />
                    </div>
                  </div>
                </div>

                {/* ── Accordion Expanded Body ── */}
                <div
                  style={{
                    maxHeight: isExpanded ? '650px' : '0',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
                  }}
                >
                  <div
                    style={{
                      padding: '28px 28px 34px',
                      display: 'grid',
                      gridTemplateColumns: '1.2fr 1fr',
                      gap: 'clamp(24px, 3.5vw, 48px)',
                      alignItems: 'center',
                    }}
                  >
                    {/* Left: Key Metrics Bullets & CTA */}
                    <div>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: '0 0 26px 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                        }}
                      >
                        {story.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            style={{
                              fontSize: 'clamp(13px, 1.1vw, 14.5px)',
                              color: '#334155',
                              lineHeight: 1.5,
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-block',
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                backgroundColor: '#0f172a',
                                marginTop: '7px',
                                flexShrink: 0,
                              }}
                            />
                            <span>
                              {bullet.text}
                              {bullet.bold && (
                                <strong style={{ color: '#0f172a', fontWeight: 700 }}>
                                  {bullet.bold}
                                </strong>
                              )}
                              {bullet.after}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Read Success Story Link */}
                      <button
                        type="button"
                        onClick={(e) => handleReadStory(e, story)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          color: '#6d28d9',
                          fontSize: '12px',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                          transition: 'gap 0.2s ease, color 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.gap = '9px';
                          e.currentTarget.style.color = '#4c1d95';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.gap = '6px';
                          e.currentTarget.style.color = '#6d28d9';
                        }}
                      >
                        <span>READ SUCCESS STORY</span>
                        <ArrowRight style={{ width: '14px', height: '14px' }} />
                      </button>
                    </div>

                    {/* Right: Featured Story Image */}
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '240px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                      }}
                    >
                      <img
                        src={story.image}
                        alt={story.imageAlt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
