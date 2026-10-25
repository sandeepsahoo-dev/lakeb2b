import React, { useState } from 'react';
import {
  Mail,
  Target,
  FileText,
  Share2,
  Flame,
  Calendar,
  ArrowRight,
  AtSign,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

/* ─── Campaign Channels Data ─── */
const channels = [
  {
    id: 'email',
    label: 'Email Marketing',
    icon: <Mail style={{ width: '15px', height: '15px' }} />,
    iconColor: '#ec4899',
    title: 'Email\nMarketing',
    description:
      'Multi-touch email campaigns with personalized messaging, A/B testing, and advanced deliverability optimization.',
    cta: 'TALK TO OUR EXPERT!',
    mockup: {
      brandLogo: 'workday',
      brandColor: '#0051c7',
      headline: 'Resilient Healthcare Teams Start with Real-Time Insights',
      buttonText: 'Explore More',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      floatingCard: {
        title: "Let's Start Designed Tech New Benefits Data Can Make You",
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        bullets: [
          'Flexible coverage for enterprise teams',
          'AI-driven wellness program integration',
        ],
      },
    },
    stats: {
      mainStat: '+200%',
      mainLabel: 'Growth in Monthly Recurring Revenue',
      caseStudyText: 'READ CASE STUDY',
      secondaryStat: '>90%',
      secondaryLabel: 'Accurate Targeting Precision',
      bottomStat: '20%',
      bottomLabel: 'Average Open Rates',
      teamImage:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    id: 'abm',
    label: 'Account-Based Marketing',
    icon: <Target style={{ width: '15px', height: '15px' }} />,
    iconColor: '#f97316',
    title: 'Account-Based\nMarketing',
    description:
      'Orchestrate unified ABM plays across display, social, email, and direct outreach to turn target accounts into closed-won deals.',
    cta: 'LAUNCH ABM CAMPAIGN',
    mockup: {
      brandLogo: 'salesforce',
      brandColor: '#00a1e0',
      headline: 'Accelerate Enterprise Pipeline Across Key Decision Makers',
      buttonText: 'View ABM Playbook',
      image:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      floatingCard: {
        title: 'Account Penetration Index Reached 84%',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        bullets: ['Synchronized 1:1 display banners', 'SDR multi-touch cadence synced'],
      },
    },
    stats: {
      mainStat: '4.5x',
      mainLabel: 'Increase in Target Account Engagement',
      caseStudyText: 'VIEW ENTERPRISE STORY',
      secondaryStat: '85%',
      secondaryLabel: 'Buying Committee Coverage',
      bottomStat: '38%',
      bottomLabel: 'Shorter Sales Cycles',
      teamImage:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    id: 'content',
    label: 'Content Syndication',
    icon: <FileText style={{ width: '15px', height: '15px' }} />,
    iconColor: '#10b981',
    title: 'Content\nSyndication',
    description:
      'Distribute your premium whitepapers, research reports, and eBooks directly to verified decision-makers actively researching your space.',
    cta: 'SYNDICATE CONTENT',
    mockup: {
      brandLogo: 'gartner',
      brandColor: '#002060',
      headline: '2026 Executive Benchmark: Cloud Security Architecture',
      buttonText: 'Download Report',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      floatingCard: {
        title: '1,200+ C-Level Downloads in 14 Days',
        avatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
        bullets: ['100% Opt-in GDPR compliant', 'Strict B2B filtering guarantee'],
      },
    },
    stats: {
      mainStat: '10k+',
      mainLabel: 'High-Intent Content Downloads Monthly',
      caseStudyText: 'READ SYNDICATION REPORT',
      secondaryStat: '99%',
      secondaryLabel: 'Verified Seniority Match',
      bottomStat: '3.2x',
      bottomLabel: 'Content ROI',
      teamImage:
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    id: 'social',
    label: 'Social Media Marketing',
    icon: <Share2 style={{ width: '15px', height: '15px' }} />,
    iconColor: '#a855f7',
    title: 'Social Media\nMarketing',
    description:
      'Engage B2B buyers on LinkedIn, Meta, and Twitter with hyper-targeted ad creative matched to exact job titles and tech stacks.',
    cta: 'BOOST SOCIAL REACH',
    mockup: {
      brandLogo: 'linkedin',
      brandColor: '#0a66c2',
      headline: 'Reach 800M+ Professionals With Account-Level Ad Retargeting',
      buttonText: 'See Campaign Specs',
      image:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      floatingCard: {
        title: 'LinkedIn Lead Gen Forms Synchronized',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        bullets: ['Audience matching via email SHA256', 'Custom video retargeting streams'],
      },
    },
    stats: {
      mainStat: '+320%',
      mainLabel: 'Growth in Qualified Click-Throughs',
      caseStudyText: 'VIEW SOCIAL CASE STUDY',
      secondaryStat: '42%',
      secondaryLabel: 'Reduction in Cost Per Lead',
      bottomStat: '3.8x',
      bottomLabel: 'Above Benchmark CTR',
      teamImage:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    id: 'leads',
    label: 'Lead Generation',
    icon: <Flame style={{ width: '15px', height: '15px' }} />,
    iconColor: '#3b82f6',
    title: 'Lead\nGeneration',
    description:
      'Deliver sales-qualified, intent-verified leads ready for conversations straight into your CRM stack without friction.',
    cta: 'GET QUALIFIED LEADS',
    mockup: {
      brandLogo: 'hubspot',
      brandColor: '#ff7a59',
      headline: 'Turn Unengaged Cold Prospects into Hot Sales Opportunities',
      buttonText: 'View Sample Data',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
      floatingCard: {
        title: '5,000+ MQLs Delivered Every Month',
        avatar:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
        bullets: ['Direct dial verified within 24h', 'Real-time buying signal verified'],
      },
    },
    stats: {
      mainStat: '500k+',
      mainLabel: 'Verified Leads Delivered Worldwide',
      caseStudyText: 'EXPLORE PIPELINE SUCCESS',
      secondaryStat: '95%',
      secondaryLabel: 'Contact Accuracy Rate',
      bottomStat: '48h',
      bottomLabel: 'Average Turnaround',
      teamImage:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
    },
  },
  {
    id: 'events',
    label: 'Event Marketing',
    icon: <Calendar style={{ width: '15px', height: '15px' }} />,
    iconColor: '#6366f1',
    title: 'Event\nMarketing',
    description:
      'Pack your virtual webinars, VIP dinners, and in-person summit booths with pre-qualified executive attendees who match your ICP.',
    cta: 'PROMOTE YOUR EVENT',
    mockup: {
      brandLogo: 'cisco',
      brandColor: '#00bceb',
      headline: 'Drive 200+ C-Suite Attendees to Your Next Flagship Summit',
      buttonText: 'Register Now',
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      floatingCard: {
        title: 'VIP Attendee Booking Confirmed',
        avatar:
          'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80',
        bullets: ['Executive calendar sync', 'Post-event pipeline tracking'],
      },
    },
    stats: {
      mainStat: '65%',
      mainLabel: 'Verified Executive Attendance Rate',
      caseStudyText: 'SEE SUMMIT SUCCESS',
      secondaryStat: '+150%',
      secondaryLabel: 'Increase in VIP Registrations',
      bottomStat: '92%',
      bottomLabel: 'Sales Meeting Conversion',
      teamImage:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=400&q=80',
    },
  },
];

const MultiChannelCampaigns = ({ onOpenContactSales, onOpenExpert }) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = channels[activeTab];

  const handleCtaClick = () => {
    if (onOpenExpert) {
      onOpenExpert('talk_expert');
    } else if (onOpenContactSales) {
      onOpenContactSales();
    }
  };

  return (
    <section
      id="multi-channel-campaigns"
      style={{
        width: '100%',
        backgroundColor: '#070314',
        backgroundImage:
          'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 45%)',
        padding: '75px 0 95px',
        position: 'relative',
        overflow: 'hidden',
        color: '#ffffff',
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
        {/* ─── Top Section Header ─── */}
        <div style={{ marginBottom: '38px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              margin: '0 0 12px 0',
            }}
          >
            Multi-Channel
            <br />
            Campaign Execution
          </h2>
          <p
            style={{
              fontSize: 'clamp(14px, 1.25vw, 15.5px)',
              color: '#94a3b8',
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 400,
            }}
          >
            Reach your buyers wherever they are with integrated campaigns across all major B2B channels
          </p>
        </div>

        {/* ─── Horizontal Tabs Navigation Bar ─── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            paddingBottom: '14px',
            marginBottom: '46px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {channels.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  position: 'relative',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.25s ease',
                }}
              >
                {/* Small circular icon container */}
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: tab.iconColor,
                  }}
                >
                  {tab.icon}
                </span>

                <span>{tab.label}</span>

                {/* Active Underline Indicator */}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-15px',
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      background: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ─── 3-Column Content Layout ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 280px) minmax(360px, 450px) minmax(280px, 360px)',
            gap: 'clamp(24px, 3vw, 40px)',
            alignItems: 'center',
          }}
        >
          {/* ════ Left Column: Title, Description & CTA ════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3
              style={{
                fontSize: 'clamp(32px, 3.2vw, 42px)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              {current.title}
            </h3>

            <p
              style={{
                fontSize: '14.5px',
                color: '#94a3b8',
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 400,
              }}
            >
              {current.description}
            </p>

            <div style={{ paddingTop: '10px' }}>
              <button
                type="button"
                onClick={handleCtaClick}
                style={{
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '13px 24px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(124, 58, 237, 0.45)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(124, 58, 237, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 58, 237, 0.45)';
                }}
              >
                {current.cta}
              </button>
            </div>
          </div>

          {/* ════ Center Column: Email / Campaign Mockup ════ */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              padding: '16px',
              background: 'linear-gradient(135deg, #e9d5ff 0%, #fbcfe8 50%, #e0e7ff 100%)',
              boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Main Mockup Card */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
                color: '#0f172a',
              }}
            >
              {/* Mockup Header */}
              <div
                style={{
                  padding: '14px 18px 10px',
                  borderBottom: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: current.mockup.brandColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 800,
                    }}
                  >
                    W
                  </div>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#1e293b',
                      textTransform: 'lowercase',
                    }}
                  >
                    {current.mockup.brandLogo}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cbd5e1' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cbd5e1' }} />
                </div>
              </div>

              {/* Mockup Hero Banner with Split Image */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  background: '#f8fafc',
                  borderBottom: '1px solid #e2e8f0',
                }}
              >
                <div style={{ padding: '16px 14px' }}>
                  <h4
                    style={{
                      fontSize: '12.5px',
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.3,
                      margin: '0 0 10px 0',
                    }}
                  >
                    {current.mockup.headline}
                  </h4>
                  <button
                    type="button"
                    style={{
                      background: '#0f172a',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '5px 10px',
                      fontSize: '9.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {current.mockup.buttonText}
                  </button>
                </div>
                <div style={{ height: '110px', overflow: 'hidden' }}>
                  <img
                    src={current.mockup.image}
                    alt="Campaign Preview"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              {/* Mockup Email Body Details */}
              <div style={{ padding: '14px 18px 24px', fontSize: '9px', color: '#64748b' }}>
                <div style={{ fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Hi [First Name],
                </div>
                <p style={{ margin: '0 0 8px 0', lineHeight: 1.4 }}>
                  Post-pandemic staffing shortages and complex regulatory changes have transformed healthcare operations...
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 8px',
                    background: '#f1f5f9',
                    borderRadius: '6px',
                    fontSize: '8.5px',
                    color: '#334155',
                  }}
                >
                  <span style={{ fontSize: '11px', color: '#6366f1' }}>“</span>
                  <span>Instant insight reports tailored for your region.</span>
                </div>
              </div>
            </div>

            {/* Floating Secondary Overlaid Card */}
            <div
              style={{
                position: 'absolute',
                right: '2px',
                bottom: '10px',
                width: '190px',
                background: '#ffffff',
                borderRadius: '12px',
                padding: '10px',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                color: '#0f172a',
                zIndex: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <img
                  src={current.mockup.floatingCard.avatar}
                  alt="Specialist"
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#1e293b',
                  }}
                >
                  {current.mockup.floatingCard.title}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {current.mockup.floatingCard.bullets.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '7.5px',
                      color: '#64748b',
                    }}
                  >
                    <CheckCircle2 style={{ width: '8px', height: '8px', color: '#10b981', flexShrink: 0 }} />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ════ Right Column: Metrics & Case Study Cards ════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Top Purple Stat Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #7c2d12 0%, #6b21a8 45%, #4a044e 100%)',
                borderRadius: '16px',
                padding: '20px 22px',
                color: '#ffffff',
                boxShadow: '0 12px 30px rgba(107, 33, 168, 0.35)',
                transition: 'transform 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              <div
                style={{
                  fontSize: 'clamp(28px, 2.8vw, 36px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  marginBottom: '6px',
                }}
              >
                {current.stats.mainStat}
              </div>
              <div
                style={{
                  fontSize: '12.5px',
                  color: 'rgba(255, 255, 255, 0.88)',
                  lineHeight: 1.35,
                  marginBottom: '14px',
                }}
              >
                {current.stats.mainLabel}
              </div>
              <button
                type="button"
                onClick={handleCtaClick}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textTransform: 'uppercase',
                }}
              >
                <span>{current.stats.caseStudyText}</span>
                <ArrowRight style={{ width: '13px', height: '13px' }} />
              </button>
            </div>

            {/* Middle Soft Lavender Stat Card */}
            <div
              style={{
                background: '#e9d5ff',
                borderRadius: '16px',
                padding: '16px 20px',
                color: '#3b0764',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(59, 7, 100, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <AtSign style={{ width: '16px', height: '16px', color: '#581c87' }} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    marginRight: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {current.stats.secondaryStat}
                </span>
                <span
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: '#4c1d95',
                  }}
                >
                  {current.stats.secondaryLabel}
                </span>
              </div>
            </div>

            {/* Bottom Row: Team Image Card & Mini Metric Card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              {/* Left: Team Photo */}
              <div
                style={{
                  height: '92px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={current.stats.teamImage}
                  alt="Team collaboration"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Right: Pale Blue-Lavender Metric Card */}
              <div
                style={{
                  background: '#e0e7ff',
                  borderRadius: '14px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  color: '#1e1b4b',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginBottom: '4px',
                  }}
                >
                  {current.stats.bottomStat}
                </div>
                <div
                  style={{
                    fontSize: '10.5px',
                    color: '#4338ca',
                    fontWeight: 500,
                    lineHeight: 1.25,
                  }}
                >
                  {current.stats.bottomLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelCampaigns;
