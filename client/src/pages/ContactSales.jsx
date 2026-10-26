import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Search from '../components/Search';
import SparkleModal from '../components/SparkleModal';

const ContactSalesPage = () => {
  // Navigation & modal states
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sparkleOpen, setSparkleOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    helpCategory: 'Talk To Sales',
    query: '',
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 18px',
    backgroundColor: '#ffffff',
    border: '1.5px solid #1e293b',
    borderRadius: '10px',
    fontSize: '14.5px',
    fontFamily: 'var(--font-body)',
    color: '#0f172a',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: '8px',
    fontFamily: 'var(--font-body)',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: `
          radial-gradient(ellipse 60% 40% at 90% 90%, rgba(243, 232, 255, 0.7) 0%, rgba(255, 255, 255, 0) 70%),
          radial-gradient(ellipse 50% 35% at 10% 85%, rgba(243, 232, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%),
          #ffffff
        `,
      }}
    >
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenContactSales={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSparkle={() => setSparkleOpen(true)}
        onOpenExpert={() => {}}
        user={currentUser}
      />

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '720px',
          margin: '0 auto',
          padding: '124px 24px 90px 24px',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-body)',
        }}
      >
        {/* Top Label: Contact Us */}
        <div
          style={{
            fontSize: '13.5px',
            fontWeight: '600',
            color: '#0f172a',
            marginBottom: '10px',
            letterSpacing: '0.01em',
          }}
        >
          Contact Us
        </div>

        {/* Heading: Ready To Build Your Growth Ecosystem? */}
        <h1
          style={{
            fontSize: '38px',
            fontWeight: '800',
            lineHeight: 1.18,
            color: '#0f172a',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.025em',
            marginBottom: '14px',
          }}
        >
          Ready To Build Your Growth<br />Ecosystem?
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            lineHeight: 1.55,
            color: '#475569',
            marginBottom: '36px',
            maxWidth: '640px',
          }}
        >
          Let's build a growth system that doesn't just run, it learns, getting faster, smarter, and more cost-effective with every turn.
        </p>

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
              Thank You! Request Received
            </h3>
            <p style={{ fontSize: '14.5px', color: '#15803d', lineHeight: 1.5, marginBottom: '24px' }}>
              Thank you, <strong>{formData.name || 'there'}</strong>. Our B2B solutions team has received your query and will connect with you at{' '}
              <strong>{formData.email}</strong> shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  helpCategory: 'Talk To Sales',
                  query: '',
                  newsletter: false,
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
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            {/* Field: Name */}
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Field: Business Email Address * */}
            <div>
              <label style={labelStyle}>Business Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Field: Phone Number * */}
            <div>
              <label style={labelStyle}>Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={inputStyle}
              />
            </div>

            {/* Field: How can we help? * */}
            <div>
              <label style={labelStyle}>How can we help? *</label>
              <div style={{ position: 'relative' }}>
                <select
                  required
                  value={formData.helpCategory}
                  onChange={(e) => setFormData({ ...formData, helpCategory: e.target.value })}
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    paddingRight: '44px',
                    cursor: 'pointer',
                  }}
                >
                  <option value="Talk To Sales">Talk To Sales</option>
                  <option value="Custom B2B Data Request">Custom B2B Data Request</option>
                  <option value="Data Enrichment & Hygiene">Data Enrichment &amp; Hygiene</option>
                  <option value="API & Tech Integrations">API &amp; Tech Integrations</option>
                  <option value="Partnership & Reseller">Partnership &amp; Reseller</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <ChevronDown
                  size={18}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: '#475569',
                  }}
                />
              </div>
            </div>

            {/* Field: Tell Us More About Your Query * */}
            <div>
              <label style={labelStyle}>Tell Us More About Your Query *</label>
              <textarea
                required
                rows={5}
                value={formData.query}
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '130px',
                }}
              />
            </div>

            {/* Checkbox: Newsletter */}
            <div style={{ marginTop: '2px' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '13.5px',
                  color: '#475569',
                  cursor: 'pointer',
                  userSelect: 'none',
                  lineHeight: 1.45,
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  style={{
                    marginTop: '2px',
                    width: '16px',
                    height: '16px',
                    accentColor: '#7c3aed',
                    cursor: 'pointer',
                  }}
                />
                <span>Yes! Sign me up for insights and news that count in weekly newsletter.</span>
              </label>
            </div>

            {/* SMS Consent Disclaimer */}
            <div
              style={{
                fontSize: '11.5px',
                color: '#64748b',
                lineHeight: 1.45,
                marginTop: '-6px',
              }}
            >
              By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message &amp; data rates may apply. You can reply STOP to opt-out of further messaging.
            </div>

            {/* SUBMIT Button */}
            <div style={{ marginTop: '4px' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#6b21a8',
                  background: 'linear-gradient(135deg, #6b21a8 0%, #7c3aed 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 34px',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(107, 33, 168, 0.35)',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(107, 33, 168, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(107, 33, 168, 0.35)';
                }}
              >
                SUBMIT
              </button>
            </div>

            {/* YOUR PRIVACY IS SECURE WITH US */}
            <div
              style={{
                fontSize: '11.5px',
                fontWeight: '600',
                color: '#64748b',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginTop: '6px',
              }}
            >
              YOUR <span style={{ textDecoration: 'underline', color: '#0f172a', fontWeight: '700' }}>PRIVACY</span> IS SECURE WITH US
            </div>
          </form>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenContactSales={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenExpert={() => {}}
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
      />

      <SparkleModal
        isOpen={sparkleOpen}
        onClose={() => setSparkleOpen(false)}
      />
    </div>
  );
};

export default ContactSalesPage;
