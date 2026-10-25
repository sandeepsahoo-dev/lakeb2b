import React, { useState, useEffect } from 'react';
import {
  Users,
  Building2,
  Globe,
  ShieldCheck,
  Phone,
  Mail,
  Heart,
  MapPin,
  CheckCircle,
} from 'lucide-react';

/* ─── Contact Profiles for the floating overlay ─── */
const contacts = [
  {
    name: 'Oliver Jack',
    role: 'Orthopedic Surgeon',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80',
    fallbackInitial: 'OJ',
    fallbackBg: '#0284c7',
  },
  {
    name: 'Jacob Michael',
    role: 'Chief Marketing Officer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    fallbackInitial: 'JM',
    fallbackBg: '#7c3aed',
  },
  {
    name: 'Amelia Margaret',
    role: 'Technical Writer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    fallbackInitial: 'AM',
    fallbackBg: '#ec4899',
  },
  {
    name: 'Charlotte Margaret',
    role: 'Executive',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    fallbackInitial: 'CM',
    fallbackBg: '#f59e0b',
  },
];

/* ─── Stat Cards Data ─── */
const stats = [
  {
    id: 'contacts',
    icon: <Users style={{ width: '22px', height: '22px', color: '#ffffff' }} />,
    number: '800M+',
    title: 'Total Contacts',
    description: 'Verified decision-makers across all industries',
  },
  {
    id: 'sites',
    icon: <Building2 style={{ width: '22px', height: '22px', color: '#ffffff' }} />,
    number: '343M+',
    title: 'Total Sites',
    description: 'Global businesses with detailed firmographics',
  },
  {
    id: 'countries',
    icon: <Globe style={{ width: '22px', height: '22px', color: '#ffffff' }} />,
    number: '243+',
    title: 'Countries',
    description: 'Worldwide coverage for global campaigns',
  },
  {
    id: 'compliant',
    icon: <ShieldCheck style={{ width: '22px', height: '22px', color: '#ffffff' }} />,
    number: '100%',
    title: 'Compliant',
    description: 'GDPR, CCPA, and CAN-SPAM compliant data',
  },
];

const B2BDataCloud = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedContacts, setLikedContacts] = useState({});

  const toggleLike = (name, e) => {
    e.stopPropagation();
    setLikedContacts((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section
      id="b2b-data-cloud"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '70px 0 90px',
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
        {/* ─── Header Section ─── */}
        <div style={{ marginBottom: '50px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 700,
              lineHeight: 1.18,
              color: '#111827',
              letterSpacing: '-0.025em',
              margin: '0 0 14px 0',
            }}
          >
            The World&apos;s Most Comprehensive
            <br />
            B2B Data Cloud
          </h2>
          <p
            style={{
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: '#4b5563',
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '820px',
              fontWeight: 400,
            }}
          >
            Access verified, actionable data that powers precision targeting and drives real business results
          </p>
        </div>

        {/* ─── Main 2-Column Grid ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 480px) 1fr',
            gap: 'clamp(30px, 4vw, 55px)',
            alignItems: 'center',
          }}
        >
          {/* ════ Left: Executive Visual with Overlaid Floating Contact Cards ════ */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '470px',
              margin: '0 auto',
            }}
          >
            {/* Main Rounded Portrait Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '520px',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 24px 60px -15px rgba(15, 23, 42, 0.25)',
                background:
                  'radial-gradient(circle at 75% 25%, #6b21a8 0%, #1e113a 45%, #0d061e 100%)',
              }}
            >
              {/* Executive Image */}
              <img
                src="/executive.jpg"
                alt="B2B Decision Maker"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block',
                }}
              />

              {/* Subtle gradient vignette at bottom so floating cards pop */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(13, 6, 30, 0) 55%, rgba(13, 6, 30, 0.55) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* ── Floating Contact List Overlay (Left-Center) ── */}
            <div
              style={{
                position: 'absolute',
                left: '42px',
                bottom: '18px',
                width: '215px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px',
                padding: '9px 9px',
                boxShadow:
                  '0 20px 45px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                zIndex: 10,
              }}
            >
              {contacts.map((contact) => {
                const isLiked = likedContacts[contact.name];
                return (
                  <div
                    key={contact.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#ffffff',
                      padding: '5px 8px',
                      borderRadius: '9px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                    }}
                  >
                    {/* Left: Avatar + Details */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0 }}>
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          flexShrink: 0,
                          border: '1px solid #e2e8f0',
                        }}
                      />
                      <div
                        style={{
                          display: 'none',
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: contact.fallbackBg,
                          color: '#ffffff',
                          fontSize: '10px',
                          fontWeight: 700,
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {contact.fallbackInitial}
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: '10.5px',
                            fontWeight: 700,
                            color: '#1e293b',
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {contact.name}
                        </div>
                        <div
                          style={{
                            fontSize: '8.5px',
                            color: '#64748b',
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {contact.role}
                        </div>
                      </div>
                    </div>

                    {/* Right: Action Icons */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        flexShrink: 0,
                        marginLeft: '3px',
                      }}
                    >
                      <button
                        type="button"
                        title="Call"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          color: '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Phone style={{ width: '10px', height: '10px' }} />
                      </button>
                      <button
                        type="button"
                        title="Email"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          color: '#64748b',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Mail style={{ width: '10px', height: '10px' }} />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => toggleLike(contact.name, e)}
                        title="Favorite"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          color: isLiked ? '#ef4444' : '#94a3b8',
                          display: 'flex',
                          alignItems: 'center',
                          transition: 'color 0.2s',
                        }}
                      >
                        <Heart
                          style={{
                            width: '10px',
                            height: '10px',
                            fill: isLiked ? '#ef4444' : 'none',
                          }}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Floating Single Contact Card (Right Overlap) ── */}
            <div
              style={{
                position: 'absolute',
                left: '202px',
                bottom: '-12px',
                width: '185px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#ffffff',
                boxShadow:
                  '0 22px 50px -5px rgba(0, 0, 0, 0.25), 0 4px 10px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                zIndex: 20,
              }}
            >
              {/* Card Purple Header */}
              <div
                style={{
                  backgroundColor: '#4c1d95',
                  padding: '9px 11px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Jacob Michael"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1.5px solid #ffffff',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.2,
                    }}
                  >
                    Jacob Michael
                  </div>
                  <div
                    style={{
                      fontSize: '8.5px',
                      color: '#c4b5fd',
                      lineHeight: 1.2,
                      marginTop: '1px',
                    }}
                  >
                    Chief Marketing Officer
                  </div>
                </div>
              </div>

              {/* Card White Body Details */}
              <div
                style={{
                  padding: '8px 11px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                }}
              >
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Phone style={{ width: '9px', height: '9px', color: '#64748b', flexShrink: 0 }} />
                  <span
                    style={{
                      fontSize: '9px',
                      color: '#475569',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                    }}
                  >
                    +909 *** ****
                  </span>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Mail style={{ width: '9px', height: '9px', color: '#64748b', flexShrink: 0 }} />
                  <span
                    style={{
                      fontSize: '9px',
                      color: '#475569',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    jaco********@****.com
                  </span>
                </div>

                {/* Address */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '7px',
                    marginTop: '2px',
                  }}
                >
                  <MapPin
                    style={{
                      width: '9px',
                      height: '9px',
                      color: '#64748b',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '8px',
                      color: '#64748b',
                      lineHeight: 1.3,
                      fontWeight: 400,
                    }}
                  >
                    36 East 8th Street, New York, NY 10003, United States
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ════ Right: 4 Horizontal Stat Cards ════ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              width: '100%',
            }}
          >
            {stats.map((item, idx) => {
              const isHovered = hoveredCard === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: '#fff3ee',
                    borderRadius: '16px',
                    padding: '22px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                    boxShadow: isHovered
                      ? '0 12px 28px -6px rgba(234, 88, 12, 0.15)'
                      : '0 2px 6px rgba(0, 0, 0, 0.02)',
                    cursor: 'default',
                    border: '1px solid rgba(254, 215, 170, 0.35)',
                  }}
                >
                  {/* Left: Square Slate Icon Badge */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 10px rgba(100, 116, 139, 0.25)',
                      transition: 'transform 0.25s ease, background-color 0.25s ease',
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Middle: Large Stat Number */}
                  <div
                    style={{
                      fontSize: 'clamp(32px, 3.2vw, 42px)',
                      fontWeight: 800,
                      color: '#0f172a',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      minWidth: 'clamp(140px, 15vw, 175px)',
                      flexShrink: 0,
                    }}
                  >
                    {item.number}
                  </div>

                  {/* Right: Title & Description */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3
                      style={{
                        fontSize: 'clamp(15px, 1.3vw, 17px)',
                        fontWeight: 700,
                        color: '#0f172a',
                        margin: '0 0 3px 0',
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 'clamp(12.5px, 1.1vw, 13.5px)',
                        color: '#64748b',
                        margin: 0,
                        lineHeight: 1.4,
                        fontWeight: 400,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BDataCloud;
