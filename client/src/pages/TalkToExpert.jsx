import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Share2, Clock, Calendar, Check, ShieldCheck, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Search from '../components/Search';
import ContactSales from '../components/ContactSales';
import SparkleModal from '../components/SparkleModal';

const TalkToExpert = () => {
  // Modal states for Navbar & Footer actions
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactSalesOpen, setContactSalesOpen] = useState(false);
  const [sparkleOpen, setSparkleOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Video play state
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    dateTime: '',
    name: '',
    email: '',
    phone: '',
    requirements: '',
    newsletter: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    color: '#0f172a',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenContactSales={() => setContactSalesOpen(true)}
        onOpenSparkle={() => setSparkleOpen(true)}
        onOpenExpert={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        user={currentUser}
      />

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '116px 32px 80px 32px',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* Breadcrumb: HOME / TALK TO AN EXPERT */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '0.06em',
            marginBottom: '32px',
          }}
        >
          <Link
            to="/"
            style={{
              color: '#64748b',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#7c3aed')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
          >
            HOME
          </Link>
          <span style={{ color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#7c3aed' }}>TALK TO AN EXPERT</span>
        </nav>

        {/* 2-Column Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column: Heading, Subtitle & Video Player */}
          <div>
            <h1
              style={{
                fontSize: '40px',
                fontWeight: '800',
                lineHeight: 1.15,
                color: '#0f172a',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.025em',
                marginBottom: '16px',
              }}
            >
              Ready for ICP-driven<br />Exponential Growth?
            </h1>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.55,
                color: '#475569',
                marginBottom: '32px',
                maxWidth: '520px',
              }}
            >
              Achieve Greater Transparency and Enhanced Visibility in Reaching and Engaging with Ideal Customers
            </p>

            {/* Video Card */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#070314',
                boxShadow: '0 12px 36px rgba(15, 23, 42, 0.15)',
              }}
            >
              {isPlayingVideo ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="How ICP Tech Will Change The Internet Forever"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                <div
                  onClick={() => setIsPlayingVideo(true)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  {/* Thumbnail Image */}
                  <img
                    src="/icp_tech_video_thumb.jpg"
                    alt="How ICP Tech Will Change The Internet Forever"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Top Bar Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      padding: '16px 20px',
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    {/* LakeB2B dot-matrix logo avatar */}
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 34 34" fill="none">
                        <circle cx="6" cy="8" r="3.2" fill="#F97316" />
                        <circle cx="15" cy="6" r="3.2" fill="#FB923C" />
                        <circle cx="24" cy="9" r="3.2" fill="#E11D48" />
                        <circle cx="6" cy="17" r="3.2" fill="#FB923C" />
                        <circle cx="15" cy="17" r="4.2" fill="#EC4899" />
                        <circle cx="25" cy="18" r="3.6" fill="#A855F7" />
                        <circle cx="8" cy="26" r="3.2" fill="#C084FC" />
                        <circle cx="17" cy="27" r="3.6" fill="#9333EA" />
                        <circle cx="27" cy="26" r="3.2" fill="#06B6D4" />
                      </svg>
                    </div>

                    <div>
                      <div
                        style={{
                          color: '#ffffff',
                          fontSize: '13.5px',
                          fontWeight: '700',
                          lineHeight: 1.25,
                          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        }}
                      >
                        How ICP Tech Will Change The Internet Forever
                      </div>
                      <div style={{ color: '#cbd5e1', fontSize: '11px', marginTop: '2px' }}>
                        LakeB2B
                      </div>
                    </div>
                  </div>

                  {/* Center YouTube Play Button */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '68px',
                      height: '48px',
                      backgroundColor: '#FF0000',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(255, 0, 0, 0.45)',
                      transition: 'transform 0.15s ease, background-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                      e.currentTarget.style.backgroundColor = '#cc0000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                      e.currentTarget.style.backgroundColor = '#FF0000';
                    }}
                  >
                    <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: '4px' }} />
                  </div>

                  {/* Bottom Bar Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '12px 20px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: '#ffffff',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button
                        type="button"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ffffff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          padding: 0,
                        }}
                      >
                        <Share2 size={18} />
                      </button>
                      <button
                        type="button"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ffffff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          padding: 0,
                        }}
                      >
                        <Clock size={18} />
                      </button>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#ffffff',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        padding: '4px 10px',
                        borderRadius: '4px',
                      }}
                    >
                      <span>Watch on</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', fontWeight: '800' }}>
                        <span
                          style={{
                            backgroundColor: '#FF0000',
                            borderRadius: '3px',
                            padding: '1px 4px',
                            display: 'inline-flex',
                            alignItems: 'center',
                          }}
                        >
                          <Play size={10} fill="#ffffff" color="#ffffff" />
                        </span>
                        YouTube
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Schedule Form */}
          <div style={{ paddingTop: '8px' }}>
            {submitted ? (
              <div
                style={{
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '12px',
                  padding: '36px 32px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px auto',
                  }}
                >
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#166534',
                    marginBottom: '8px',
                  }}
                >
                  Consultation Scheduled!
                </h3>
                <p style={{ fontSize: '14.5px', color: '#15803d', lineHeight: 1.5, marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name || 'there'}</strong>. One of our Senior Growth Architects has reserved your slot and will reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      dateTime: '',
                      name: '',
                      email: '',
                      phone: '',
                      requirements: '',
                      newsletter: true,
                    });
                  }}
                  style={{
                    backgroundColor: '#166534',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    fontSize: '13.5px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Schedule Another Call
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {/* Select Date and Time */}
                <div>
                  <input
                    type="text"
                    placeholder="Select Date and Time"
                    value={formData.dateTime}
                    onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                    onFocus={(e) => (e.target.type = 'datetime-local')}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = 'text';
                    }}
                    style={inputStyle}
                  />
                </div>

                {/* Name* */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Email* */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Phone* */}
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                {/* Requirements* */}
                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Requirements*"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '110px',
                    }}
                  />
                </div>

                {/* Newsletter Checkbox */}
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13.5px',
                    color: '#334155',
                    cursor: 'pointer',
                    marginTop: '2px',
                    userSelect: 'none',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    style={{
                      accentColor: '#7c3aed',
                      width: '16px',
                      height: '16px',
                      cursor: 'pointer',
                    }}
                  />
                  <span>I would like to subscribe to your Newsletter.</span>
                </label>

                {/* SCHEDULE NOW! Button */}
                <div style={{ marginTop: '6px' }}>
                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(135deg, #c026d3 0%, #a855f7 45%, #7c3aed 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '13px 32px',
                      fontSize: '13.5px',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(168, 85, 247, 0.4)',
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(168, 85, 247, 0.55)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(168, 85, 247, 0.4)';
                    }}
                  >
                    SCHEDULE NOW!
                  </button>
                </div>

                {/* Privacy Assurance Text */}
                <div
                  style={{
                    fontSize: '12.5px',
                    color: '#64748b',
                    marginTop: '4px',
                  }}
                >
                  Your <strong style={{ color: '#0f172a' }}>privacy</strong> is secure with us
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenContactSales={() => setContactSalesOpen(true)}
        onOpenExpert={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {/* Interactive Modals */}
      <Login
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={(user) => setCurrentUser(user)}
      />

      <Search
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={(item) => {
          if (item.category === 'Solutions') setContactSalesOpen(true);
        }}
      />

      <ContactSales
        isOpen={contactSalesOpen}
        onClose={() => setContactSalesOpen(false)}
      />

      <SparkleModal
        isOpen={sparkleOpen}
        onClose={() => setSparkleOpen(false)}
      />
    </div>
  );
};

export default TalkToExpert;
