import React from 'react';
import { Clock, Check, Sparkles, Shield, ArrowRight, Zap, Database } from 'lucide-react';

const Body = ({ onOpenExpert, onOpenContactSales }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, #1c0836 0%, #080315 70%, #05020d 100%)',
      }}
    >
      {/* 3D Glowing Digital Ribbons and Ambient Atmosphere */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {/* Soft violet / pink ambient flares */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.28) 0%, rgba(236, 72, 153, 0.15) 35%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'pulseGlow 6s ease-in-out infinite alternate',
          }}
        />

        {/* Focal Lens Flare Highlight */}
        <div
          style={{
            position: 'absolute',
            bottom: '26%',
            right: '28%',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.7) 0%, rgba(168, 85, 247, 0.4) 40%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* 3D Curved Flowing Geometric Ribbons (SVG & CSS 3D Planes) */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            opacity: 0.95,
          }}
          preserveAspectRatio="xMaxYMax slice"
        >
          <defs>
            {/* Gradients for ribbons */}
            <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="ribbonGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="ribbonGrad3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="beamLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="15%" stopColor="rgba(168, 85, 247, 0.2)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.6)" />
              <stop offset="75%" stopColor="rgba(147, 51, 234, 0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            {/* Glass panel filter */}
            <filter id="glassGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sweeping Digital Ribbon 1 (Deep Base Layer) */}
          <path
            d="M 500 890 C 850 870 1150 780 1440 450 L 1440 680 C 1150 860 850 900 500 900 Z"
            fill="url(#ribbonGrad1)"
            opacity="0.6"
          />

          {/* Sweeping Ribbon 2 (Main Curved Glass Ribbon) */}
          <path
            d="M 680 880 C 950 820 1200 680 1440 320 L 1440 420 C 1220 720 980 840 720 895 Z"
            fill="url(#ribbonGrad2)"
            opacity="0.85"
          />

          {/* Ribbon 3 (Higher Arch with Cyan/Violet Sheen) */}
          <path
            d="M 850 850 C 1080 760 1280 580 1440 220 L 1440 290 C 1300 620 1100 780 880 865 Z"
            fill="url(#ribbonGrad3)"
            opacity="0.75"
          />

          {/* Floating translucent polygonal panels matching screenshot */}
          {/* Panel 1 */}
          <polygon
            points="1020,720 1140,650 1190,740 1060,800"
            fill="rgba(168, 85, 247, 0.32)"
            stroke="rgba(216, 180, 254, 0.4)"
            strokeWidth="1.2"
          />
          {/* Panel 2 */}
          <polygon
            points="1120,640 1250,560 1310,640 1170,720"
            fill="rgba(147, 51, 234, 0.38)"
            stroke="rgba(192, 132, 252, 0.45)"
            strokeWidth="1.2"
          />
          {/* Panel 3 */}
          <polygon
            points="1230,550 1370,440 1420,520 1280,620"
            fill="rgba(236, 72, 153, 0.3)"
            stroke="rgba(244, 114, 182, 0.4)"
            strokeWidth="1.2"
          />
          {/* Panel 4 */}
          <polygon
            points="950,780 1050,720 1100,790 990,845"
            fill="rgba(56, 189, 248, 0.22)"
            stroke="rgba(125, 211, 252, 0.35)"
            strokeWidth="1"
          />
          {/* Panel 5 */}
          <polygon
            points="1310,470 1430,360 1440,430 1350,530"
            fill="rgba(168, 85, 247, 0.45)"
            stroke="rgba(216, 180, 254, 0.55)"
            strokeWidth="1.2"
          />

          {/* Thin Horizontal Horizon Laser / Stream Line */}
          <line x1="200" y1="830" x2="1440" y2="830" stroke="url(#beamLine)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          {/* Main Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 5.8vw, 76px)',
              fontWeight: '800',
              lineHeight: 1.08,
              letterSpacing: '-0.028em',
              color: '#ffffff',
              marginBottom: '28px',
            }}
          >
            Custom B2B Data.<br />
            Built For Outreach
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px, 1.4vw, 20px)',
              fontWeight: '400',
              lineHeight: 1.6,
              color: '#c4bcd8',
              maxWidth: '620px',
              marginBottom: '40px',
            }}
          >
            Custom B2B contact data intelligence with intent signals.<br />
            Take it by API, or hand the whole campaign to our team.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            {/* TALK TO AN EXPERT */}
            <button
              onClick={() => onOpenExpert('talk_expert')}
              className="btn-primary-purple"
              style={{
                borderRadius: '8px',
                padding: '16px 32px',
                fontSize: '13px',
              }}
            >
              TALK TO AN EXPERT
            </button>

            {/* GET A FREE SAMPLE */}
            <button
              onClick={() => onOpenExpert('free_sample')}
              className="btn-white"
              style={{
                borderRadius: '8px',
                padding: '16px 32px',
                fontSize: '13px',
              }}
            >
              GET A FREE SAMPLE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Left Floating Badge with Clock / Checkmark Icon */}
      <div
        style={{
          position: 'absolute',
          bottom: '26px',
          left: '32px',
          zIndex: 10,
        }}
      >
        <button
          onClick={() => onOpenExpert('free_sample')}
          aria-label="Deliverability Status & Guarantee"
          title="95% Deliverability Guarantee & Instant Delivery"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6b21a8, #7c3aed)',
            border: '2px solid rgba(216, 180, 254, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.55)',
            color: '#ffffff',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) rotate(6deg)';
            e.currentTarget.style.boxShadow = '0 0 28px rgba(192, 132, 252, 0.85)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.55)';
          }}
        >
          {/* Clock badge icon with sparkles */}
          <div style={{ position: 'relative' }}>
            <Clock style={{ width: '20px', height: '20px', color: '#ffffff' }} />
            <span
              style={{
                position: 'absolute',
                top: '-3px',
                right: '-3px',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#38bdf8',
                boxShadow: '0 0 6px #38bdf8',
              }}
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Body;
