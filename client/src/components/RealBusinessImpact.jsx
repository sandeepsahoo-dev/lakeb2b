import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Zap, Clock, Users } from 'lucide-react';

const impactCards = [
  {
    id: 1,
    statBig: '3x',
    statSub: 'faster',
    tag: 'Time to pipeline',
    title: 'Accelerated Pipeline Velocity',
    description: 'Shorter sales cycles and rapid lead qualification for SDR teams.',
    image:
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=900&q=80',
    fallbackGrad: 'linear-gradient(135deg, #091e3a 0%, #050b14 100%)',
    cta: 'EXPLORE VELOCITY',
  },
  {
    id: 2,
    statBig: '40%',
    statSub: 'lower',
    tag: 'CAC on average',
    title: 'Lower Customer Acquisition Cost',
    description: 'Slash wasted ad-spend and outreach bounce rates with precision verified data.',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
    fallbackGrad: 'linear-gradient(135deg, #1b0a2a 0%, #070314 100%)',
    cta: 'CONSULT WITH US',
    hasCta: true,
  },
  {
    id: 3,
    statBig: '10x',
    statSub: 'faster',
    tag: 'Campaign launch',
    title: 'Faster Time to Market',
    description: 'Instant segment generation with pre-packaged industry intent lists.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    fallbackGrad: 'linear-gradient(135deg, #0a192f 0%, #030a16 100%)',
    cta: 'VIEW CAMPAIGNS',
  },
  {
    id: 4,
    statBig: 'ZERO',
    statSub: '',
    tag: 'New hires needed',
    title: 'Scalable Growth Model',
    description: 'Scale outreach effortlessly without increasing sales ops headcount.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
    fallbackGrad: 'linear-gradient(135deg, #0f2027 0%, #050d12 100%)',
    cta: 'SCALE WITH US',
  },
];

const RealBusinessImpact = ({ onOpenContactSales, onOpenExpert }) => {
  // Currently clicked / selected card (defaults to card 2, matching the reference screenshot)
  const [selectedId, setSelectedId] = useState(2);
  // Hovered card (temporarily expands while hovered)
  const [hoveredId, setHoveredId] = useState(null);

  // Active card is the hovered card if any, else the selected card
  const activeId = hoveredId !== null ? hoveredId : selectedId;

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  const handleCtaClick = (e, item) => {
    e.stopPropagation();
    if (onOpenContactSales) {
      onOpenContactSales();
    } else if (onOpenExpert) {
      onOpenExpert('talk_expert');
    }
  };

  return (
    <section
      id="real-business-impact"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '70px 0 95px',
        position: 'relative',
        overflow: 'hidden',
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
        {/* ─── Header ─── */}
        <div style={{ marginBottom: '45px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#111827',
              letterSpacing: '-0.025em',
              margin: '0 0 12px 0',
            }}
          >
            Real Business Impact
          </h2>
          <p
            style={{
              fontSize: 'clamp(14px, 1.25vw, 16px)',
              color: '#4b5563',
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 400,
            }}
          >
            See measurable results that matter to your business, not just vanity metrics
          </p>
        </div>

        {/* ─── Horizontal Interactive Expanding Cards Container ─── */}
        <div
          onMouseLeave={() => setHoveredId(null)}
          style={{
            display: 'flex',
            gap: '18px',
            height: '440px',
            width: '100%',
            alignItems: 'stretch',
          }}
        >
          {impactCards.map((card) => {
            const isExpanded = activeId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                onMouseEnter={() => setHoveredId(card.id)}
                style={{
                  position: 'relative',
                  flex: isExpanded ? 2.4 : 1,
                  minWidth: isExpanded ? '300px' : '150px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'flex 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease',
                  boxShadow: isExpanded
                    ? '0 24px 50px -10px rgba(0, 0, 0, 0.35)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
                  backgroundColor: '#0a0a0f',
                }}
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: isExpanded ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                />

                {/* Dark Vignette Overlay for Crisp Readability */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.92) 100%)',
                    transition: 'background 0.4s ease',
                  }}
                />

                {/* Content Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    zIndex: 2,
                    color: '#ffffff',
                  }}
                >
                  {/* Big Number & Subtext */}
                  <div style={{ marginBottom: '16px' }}>
                    <div
                      style={{
                        fontSize: card.statBig === 'ZERO' ? 'clamp(32px, 3.4vw, 42px)' : 'clamp(38px, 4.2vw, 50px)',
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: card.statBig === 'ZERO' ? '0.02em' : '-0.03em',
                        color: '#ffffff',
                      }}
                    >
                      {card.statBig}
                    </div>
                    {card.statSub && (
                      <div
                        style={{
                          fontSize: 'clamp(22px, 2.3vw, 28px)',
                          fontWeight: 700,
                          lineHeight: 1.1,
                          color: '#ffffff',
                          marginTop: '4px',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {card.statSub}
                      </div>
                    )}
                  </div>

                  {/* Tagline / Subtitle */}
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255, 255, 255, 0.75)',
                      marginBottom: '4px',
                      fontWeight: 400,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.tag}
                  </div>

                  {/* Main Title */}
                  <div
                    style={{
                      fontSize: 'clamp(14px, 1.3vw, 16px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.3,
                      marginBottom: isExpanded ? '14px' : '0',
                    }}
                  >
                    {card.title}
                  </div>

                  {/* Call to action (shown on expanded card) */}
                  <div
                    style={{
                      maxHeight: isExpanded ? '60px' : '0',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, opacity 0.4s ease',
                    }}
                  >
                    <button
                      type="button"
                      onClick={(e) => handleCtaClick(e, card)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        transition: 'gap 0.2s ease, opacity 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.gap = '9px';
                        e.currentTarget.style.opacity = '0.85';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.gap = '6px';
                        e.currentTarget.style.opacity = '1';
                      }}
                    >
                      <span>{card.cta}</span>
                      <ArrowRight style={{ width: '14px', height: '14px' }} />
                    </button>
                  </div>
                </div>

                {/* Subtle active border highlight */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '20px',
                    border: isExpanded
                      ? '1.5px solid rgba(255, 255, 255, 0.45)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    pointerEvents: 'none',
                    transition: 'border-color 0.4s ease',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RealBusinessImpact;
