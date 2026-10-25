import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

/* ─── Testimonials Data ─── */
const testimonials = [
  {
    id: 1,
    company: 'AVISON YOUNG',
    leadQuote: 'LakeB2B has been an essential partner for our email campaign process.',
    quote:
      'LakeB2B has the resources to produce the best targeted email lists. Their professionals are extremely responsive and consistently deliver the lists we need in a timely manner. The investment has been very affordable, and our team has been very satisfied with the results we have experienced. I recommend contacting LakeB2B to advance your business development.',
    author: 'David R. Scherer,',
    role: 'Principal, Avison Young',
  },
  {
    id: 2,
    company: 'CLOUDSCALE AI',
    leadQuote: 'The accuracy of LakeB2B’s contact data transformed our outbound pipeline.',
    quote:
      'We tested multiple prominent data providers before choosing LakeB2B. Their direct dial accuracy and verified work emails exceeded 95%, completely eliminating email bounce penalties on our domains. Our SDR team achieved our annual revenue targets two months ahead of schedule.',
    author: 'Sarah Jenkins,',
    role: 'VP of Demand Generation, CloudScale',
  },
  {
    id: 3,
    company: 'GLOBAL HEALTH SOLUTIONS',
    leadQuote: 'Unmatched coverage of verified medical and healthcare decision makers.',
    quote:
      'Reaching verified hospital executives and department heads used to be our biggest bottleneck. LakeB2B delivered customized, compliant lists that doubled our response rates on national awareness campaigns. An indispensable growth engine for healthcare marketing.',
    author: 'Dr. Michael Torres,',
    role: 'Head of Enterprise Strategy, Global Health',
  },
];

const TrustedResults = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section
      id="trusted-results"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '30px 0 90px',
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
        {/* ─── Outer Framed Card Container ─── */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            padding: 'clamp(32px, 4vw, 56px)',
          }}
        >
          {/* Section Heading & Subtitle */}
          <div style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.4vw, 38px)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#111827',
                letterSpacing: '-0.025em',
                margin: '0 0 12px 0',
              }}
            >
              Trusted Data. Proven Results.
            </h2>
            <p
              style={{
                fontSize: 'clamp(14px, 1.25vw, 15.5px)',
                color: '#475569',
                lineHeight: 1.5,
                margin: 0,
                maxWidth: '780px',
                fontWeight: 400,
              }}
            >
              See how businesses use LakeB2B data and intelligence to reach the right prospects, accelerate growth, and drive better outcomes.
            </p>
          </div>

          {/* ─── 2-Column Content Grid ─── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1fr)',
              gap: 'clamp(32px, 4.5vw, 60px)',
              alignItems: 'center',
            }}
          >
            {/* ════ Left Column: Testimonial Slider ════ */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                minHeight: '340px',
              }}
            >
              <div>
                {/* Company Logo / Wordmark */}
                <div style={{ marginBottom: '22px' }}>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: '#0f172a',
                      lineHeight: 1.1,
                      borderBottom: '2px solid #0f172a',
                      display: 'inline-block',
                      paddingBottom: '2px',
                    }}
                  >
                    {current.company.includes(' ') ? (
                      <>
                        {current.company.split(' ')[0]}
                        <br />
                        {current.company.split(' ').slice(1).join(' ')}
                      </>
                    ) : (
                      current.company
                    )}
                  </div>
                </div>

                {/* Lead Quote */}
                <h3
                  style={{
                    fontSize: 'clamp(17px, 1.4vw, 20px)',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    color: '#0f172a',
                    lineHeight: 1.4,
                    margin: '0 0 16px 0',
                  }}
                >
                  {current.leadQuote}
                </h3>

                {/* Body Testimonial Text with subtle background quotation mark */}
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <Quote
                    style={{
                      position: 'absolute',
                      right: '20px',
                      bottom: '-15px',
                      width: '64px',
                      height: '64px',
                      color: '#f3e8ff',
                      opacity: 0.85,
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  />
                  <p
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      fontSize: 'clamp(13px, 1.1vw, 14px)',
                      fontStyle: 'italic',
                      color: '#334155',
                      lineHeight: 1.65,
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    {current.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.3,
                    }}
                  >
                    {current.author}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: '#64748b',
                      lineHeight: 1.3,
                      marginTop: '2px',
                    }}
                  >
                    {current.role}
                  </div>
                </div>
              </div>

              {/* Slider Dots */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '28px',
                }}
              >
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: activeIndex === idx ? '8px' : '7px',
                      height: activeIndex === idx ? '8px' : '7px',
                      borderRadius: '50%',
                      backgroundColor: activeIndex === idx ? '#6d28d9' : '#cbd5e1',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'background-color 0.25s ease, transform 0.2s ease',
                      transform: activeIndex === idx ? 'scale(1.2)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* ════ Right Column: Bento Grid of Proof & Media ════ */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                width: '100%',
              }}
            >
              {/* Row 1: Team Photo (left) + G2 Badge (right) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.05fr 1fr',
                  gap: '14px',
                }}
              >
                {/* Photo 1: Colleagues collaborating with tablet */}
                <div
                  style={{
                    height: '135px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80"
                    alt="Professionals reviewing results on tablet"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* G2 Rating Card */}
                <div
                  style={{
                    background: '#f8fafc',
                    borderRadius: '16px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  {/* G2 Orange Icon */}
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: '#ea580c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '15px',
                      flexShrink: 0,
                    }}
                  >
                    G<span style={{ fontSize: '10px', verticalAlign: 'super' }}>2</span>
                  </div>

                  <div>
                    {/* Stars */}
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '3px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          style={{
                            width: '13px',
                            height: '13px',
                            fill: '#eab308',
                            color: '#eab308',
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                      4.7/5 on G2
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Trustpilot Card (left) + Team Meeting Photo (right) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.05fr',
                  gap: '14px',
                }}
              >
                {/* Trustpilot Card */}
                <div
                  style={{
                    background: '#fdf4ff',
                    borderRadius: '16px',
                    padding: '16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #fae8ff',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '4px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        style={{
                          width: '11px',
                          height: '11px',
                          fill: '#0f172a',
                          color: '#0f172a',
                        }}
                      />
                    ))}
                  </div>

                  <div
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: '#334155',
                      marginBottom: '4px',
                    }}
                  >
                    Excellent · 4.8/5
                  </div>

                  {/* Trustpilot logo */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#0f172a',
                    }}
                  >
                    <span style={{ color: '#00b67a', fontSize: '15px' }}>★</span>
                    <span>Trustpilot</span>
                  </div>
                </div>

                {/* Photo 2: Team discussion with laptop */}
                <div
                  style={{
                    height: '135px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
                    alt="Creative team discussing project results"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              {/* Row 3: Vibrant Abstract Wave Banner */}
              <div
                style={{
                  height: '92px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background:
                    'linear-gradient(90deg, #1e1b4b 0%, #312e81 25%, #7c3aed 50%, #d946ef 75%, #06b6d4 100%)',
                  position: 'relative',
                  boxShadow: '0 6px 20px rgba(124, 58, 237, 0.25)',
                }}
              >
                {/* SVG undulating wave ribbons */}
                <svg
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 500 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: 'absolute', inset: 0, opacity: 0.9 }}
                >
                  <defs>
                    <linearGradient id="waveGradA" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4338ca" />
                      <stop offset="50%" stopColor="#c026d3" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="waveGradB" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#312e81" />
                      <stop offset="50%" stopColor="#9333ea" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  {/* Vertical undulating ripples matching the screenshot */}
                  {[...Array(26)].map((_, i) => {
                    const x = i * 20;
                    return (
                      <path
                        key={i}
                        d={`M${x} 0 C${x + 8} 35, ${x - 8} 65, ${x + 4} 100`}
                        stroke={i % 2 === 0 ? 'url(#waveGradA)' : 'url(#waveGradB)'}
                        strokeWidth="11"
                        strokeLinecap="round"
                        opacity={0.85}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedResults;
