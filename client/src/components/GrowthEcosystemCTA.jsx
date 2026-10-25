import React from 'react';
import { Database, Phone, Rocket } from 'lucide-react';

const GrowthEcosystemCTA = ({ onOpenContactSales, onOpenExpert }) => {
  const handleExpertClick = (mode = 'talk_expert') => {
    if (onOpenExpert) {
      onOpenExpert(mode);
    } else if (onOpenContactSales) {
      onOpenContactSales();
    }
  };

  const handleContactSalesClick = () => {
    if (onOpenContactSales) {
      onOpenContactSales();
    } else if (onOpenExpert) {
      onOpenExpert('talk_expert');
    }
  };

  return (
    <section
      id="growth-ecosystem-cta"
      style={{
        width: '100%',
        backgroundColor: '#070314',
        position: 'relative',
        overflow: 'hidden',
        padding: '90px 0 0 0',
        color: '#ffffff',
        fontFamily: "'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* ─── Background Cyber Glows & Neon Beams ─── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {/* Giant Dark Circular Lens Disk */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            width: 'clamp(600px, 75vw, 1050px)',
            height: 'clamp(600px, 75vw, 1050px)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 45% 45%, #180d2e 0%, #0c051a 55%, #05020d 100%)',
            boxShadow:
              'inset 0 0 80px rgba(168, 85, 247, 0.15), 0 0 100px rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(168, 85, 247, 0.18)',
          }}
        />

        {/* Diagonal Neon Streaks (Purple & Magenta Beams) */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            right: '-10%',
            width: '650px',
            height: '1100px',
            background:
              'linear-gradient(135deg, transparent 40%, rgba(168, 85, 247, 0.28) 48%, rgba(236, 72, 153, 0.35) 52%, transparent 60%)',
            transform: 'rotate(-25deg)',
            filter: 'blur(30px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '12%',
            width: '2px',
            height: '750px',
            background:
              'linear-gradient(180deg, transparent 0%, rgba(192, 132, 252, 0.8) 40%, rgba(236, 72, 153, 0.9) 70%, transparent 100%)',
            transform: 'rotate(-32deg)',
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.8)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-5%',
            right: '25%',
            width: '1.5px',
            height: '650px',
            background:
              'linear-gradient(180deg, transparent 0%, rgba(168, 85, 247, 0.6) 50%, transparent 100%)',
            transform: 'rotate(-32deg)',
            boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)',
          }}
        />

        {/* Ambient Radial Lights */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* ─── Main Centered Content ─── */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: 'clamp(32px, 4.2vw, 52px)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#ffffff',
            letterSpacing: '-0.025em',
            margin: '0 0 16px 0',
          }}
        >
          Ready To Build Your
          <br />
          Growth Ecosystem?
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.25vw, 15.5px)',
            color: '#c4bcd8',
            lineHeight: 1.55,
            maxWidth: '640px',
            margin: '0 auto 28px auto',
            fontWeight: 400,
          }}
        >
          Talk to our Growth Architects and discover how LakeB2B can help you build a
          predictable, scalable revenue engine that drives consistent pipeline growth.
        </p>

        {/* Primary CTA Button */}
        <div style={{ marginBottom: '55px' }}>
          <button
            type="button"
            onClick={() => handleExpertClick('talk_expert')}
            style={{
              background: '#5b21b6',
              color: '#ffffff',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              borderRadius: '8px',
              padding: '13px 30px',
              fontSize: '12.5px',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(91, 33, 182, 0.45)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = '#6d28d9';
              e.currentTarget.style.boxShadow = '0 14px 32px rgba(109, 40, 217, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.background = '#5b21b6';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(91, 33, 182, 0.45)';
            }}
          >
            TALK TO AN EXPERT
          </button>
        </div>

        {/* ─── 3 Feature Cards Row ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '18px',
            width: '100%',
            maxWidth: '1040px',
            marginBottom: '70px',
          }}
        >
          {/* Card 1: Free Data Sample */}
          <div
            onClick={() => handleExpertClick('free_sample')}
            style={{
              background: 'rgba(23, 12, 42, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '14px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(124, 58, 237, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.25)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4c1d95',
                flexShrink: 0,
              }}
            >
              <Database style={{ width: '20px', height: '20px' }} />
            </div>
            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '2px',
                }}
              >
                Get a Free Data Sample
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: '#94a3b8',
                  lineHeight: 1.3,
                }}
              >
                25 verified contacts, no credit card required
              </div>
            </div>
          </div>

          {/* Card 2: Strategy Call */}
          <div
            onClick={() => handleExpertClick('talk_expert')}
            style={{
              background: 'rgba(23, 12, 42, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '14px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(124, 58, 237, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.25)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4c1d95',
                flexShrink: 0,
              }}
            >
              <Phone style={{ width: '19px', height: '19px' }} />
            </div>
            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '2px',
                }}
              >
                Book a Strategy Call
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: '#94a3b8',
                  lineHeight: 1.3,
                }}
              >
                30-min consultation with healthcare growth experts
              </div>
            </div>
          </div>

          {/* Card 3: Pilot Campaign */}
          <div
            onClick={handleContactSalesClick}
            style={{
              background: 'rgba(23, 12, 42, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '14px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(124, 58, 237, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.25)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#4c1d95',
                flexShrink: 0,
              }}
            >
              <Rocket style={{ width: '20px', height: '20px' }} />
            </div>
            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '2px',
                }}
              >
                Launch a Pilot Campaign
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: '#94a3b8',
                  lineHeight: 1.3,
                }}
              >
                Test with 500 contacts, full campaign execution
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Massive #EnablingGrowth Typography Banner ─── */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0.82,
          userSelect: 'none',
          pointerEvents: 'none',
          position: 'relative',
          zIndex: 1,
          marginTop: '10px',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(64px, 16vw, 210px)',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
            display: 'block',
            textAlign: 'center',
            transform: 'translateY(12%)',
            textShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
          }}
        >
          #EnablingGrowth
        </div>
      </div>
    </section>
  );
};

export default GrowthEcosystemCTA;
