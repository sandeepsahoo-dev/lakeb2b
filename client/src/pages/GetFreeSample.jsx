import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Search from '../components/Search';
import ContactSales from '../components/ContactSales';
import SparkleModal from '../components/SparkleModal';

const GetFreeSample = () => {
  // Navigation & modal states
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactSalesOpen, setContactSalesOpen] = useState(false);
  const [sparkleOpen, setSparkleOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Multi-step form state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: ICP
    geography: '',
    industry: '',
    department: '',
    titleLevels: '',
    // Step 2: Contact
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    backgroundColor: '#ffffff',
    border: '1px solid #cbd5e1',
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

      {/* Main Container */}
      <main
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '120px 32px 80px 32px',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-body)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '64px',
            alignItems: 'flex-start',
          }}
        >
          {/* Left Column: Heading, Subtitle & Sales Funnel Diagram */}
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
              Kickstart your outreach<br />with real prospects
            </h1>

            <h2
              style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#0f172a',
                fontFamily: 'var(--font-heading)',
                marginBottom: '12px',
              }}
            >
              Get 25 Free Sample Contacts!
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.55,
                color: '#64748b',
                marginBottom: '36px',
                maxWidth: '480px',
              }}
            >
              Start reaching your ideal customers — no strings attached, just quality contacts to boost your pipeline.
            </p>

            {/* Funnel Diagram (Vector graphic matching screenshot) */}
            <div style={{ maxWidth: '440px', margin: '0 auto' }}>
              <svg viewBox="0 0 420 380" style={{ width: '100%', height: 'auto', display: 'block' }}>
                <defs>
                  {/* Gradients for borders */}
                  <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                  <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>

                {/* --- Top Funnel Rim Wireframe --- */}
                <path
                  d="M 50,45 L 370,45 L 340,15 L 80,15 Z"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                  opacity="0.6"
                />

                {/* --- TIER 1: Identify Prospects (Cyan) --- */}
                <path
                  d="M 50,45 L 370,45 L 330,125 L 90,125 Z"
                  fill="#ffffff"
                  stroke="url(#cyanGrad)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {/* 3D perspective edge left/right */}
                <path d="M 50,45 L 70,60 L 350,60 L 370,45" fill="none" stroke="#38bdf8" strokeWidth="1.2" opacity="0.5" />
                <text
                  x="210"
                  y="92"
                  textAnchor="middle"
                  fill="#0891b2"
                  fontFamily="var(--font-heading)"
                  fontSize="17"
                  fontWeight="700"
                  letterSpacing="0.01em"
                >
                  Identify Prospects
                </text>

                {/* --- TIER 2: Engage Prospects (Purple) --- */}
                <path
                  d="M 105,145 L 315,145 L 280,225 L 140,225 Z"
                  fill="#ffffff"
                  stroke="url(#purpleGrad)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path d="M 105,145 L 120,158 L 300,158 L 315,145" fill="none" stroke="#a855f7" strokeWidth="1.2" opacity="0.5" />
                <text
                  x="210"
                  y="192"
                  textAnchor="middle"
                  fill="#7c3aed"
                  fontFamily="var(--font-heading)"
                  fontSize="17"
                  fontWeight="700"
                  letterSpacing="0.01em"
                >
                  Engage Prospects
                </text>

                {/* --- TIER 3: Convert Prospects (Pink/Magenta) --- */}
                <path
                  d="M 152,245 L 268,245 L 240,320 L 180,320 Z"
                  fill="#ffffff"
                  stroke="url(#pinkGrad)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path d="M 152,245 L 164,256 L 256,256 L 268,245" fill="none" stroke="#ec4899" strokeWidth="1.2" opacity="0.5" />
                <text
                  x="210"
                  y="278"
                  textAnchor="middle"
                  fill="#c026d3"
                  fontFamily="var(--font-heading)"
                  fontSize="15"
                  fontWeight="700"
                >
                  Convert
                </text>
                <text
                  x="210"
                  y="298"
                  textAnchor="middle"
                  fill="#c026d3"
                  fontFamily="var(--font-heading)"
                  fontSize="15"
                  fontWeight="700"
                >
                  Prospects
                </text>

                {/* --- Funnel Bottom Pointy Tip --- */}
                <path
                  d="M 190,328 L 210,365 L 230,328"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Multi-Step Lead Form */}
          <div style={{ paddingTop: '8px' }}>
            {submitted ? (
              <div
                style={{
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '12px',
                  padding: '40px 32px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px auto',
                  }}
                >
                  <Check size={30} strokeWidth={2.5} />
                </div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#166534',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Your 25 Free Contacts Are On The Way!
                </h3>
                <p style={{ fontSize: '14.5px', color: '#15803d', lineHeight: 1.5, marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name || 'valued partner'}</strong>. We have compiled your custom ICP criteria for{' '}
                  <strong>{formData.industry || 'your industry'}</strong> and our data team will deliver your verified sample list to{' '}
                  <strong>{formData.email || 'your email'}</strong> within minutes.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setFormData({
                      geography: '',
                      industry: '',
                      department: '',
                      titleLevels: '',
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                    });
                  }}
                  style={{
                    backgroundColor: '#166534',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '11px 22px',
                    fontSize: '13.5px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Request Another Sample
                </button>
              </div>
            ) : step === 1 ? (
              /* --- Step 1: ICP (Exact fields from screenshot) --- */
              <div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#1e3a8a',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '20px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Step 1: Your Ideal Customer Profile
                </h3>

                <form
                  onSubmit={handleNext}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Geography"
                      value={formData.geography}
                      onChange={(e) => setFormData({ ...formData, geography: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Department/Function"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Title Levels"
                      value={formData.titleLevels}
                      onChange={(e) => setFormData({ ...formData, titleLevels: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      style={{
                        background: 'linear-gradient(135deg, #c026d3 0%, #a855f7 45%, #7c3aed 100%)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '11px 32px',
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(168, 85, 247, 0.55)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(168, 85, 247, 0.4)';
                      }}
                    >
                      NEXT
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* --- Step 2: Contact info to send the 25 contacts --- */
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1e3a8a',
                      fontFamily: 'var(--font-heading)',
                      margin: 0,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Step 2: Deliver Your 25 Free Contacts
                  </h3>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#7c3aed',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                    }}
                  >
                    <ArrowLeft size={14} /> Back
                  </button>
                </div>

                <form
                  onSubmit={handleFinalSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Business Email*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      style={{
                        background: 'linear-gradient(135deg, #c026d3 0%, #a855f7 45%, #7c3aed 100%)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '13px 32px',
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 6px 18px rgba(168, 85, 247, 0.55)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(168, 85, 247, 0.4)';
                      }}
                    >
                      GET 25 FREE CONTACTS NOW!
                    </button>
                  </div>

                  <div style={{ fontSize: '12.5px', color: '#64748b', marginTop: '4px' }}>
                    Your <strong style={{ color: '#0f172a' }}>privacy</strong> is secure with us
                  </div>
                </form>
              </div>
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

export default GetFreeSample;
