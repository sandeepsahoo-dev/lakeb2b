import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Search from '../components/Search';
import SparkleModal from '../components/SparkleModal';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    agreeTerms: true,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  // Modals for Navbar
  const [searchOpen, setSearchOpen] = useState(false);
  const [sparkleOpen, setSparkleOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setIsError(true);
      setMessage('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setIsError(false);
    setMessage(null);

    const userData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      role: 'Member',
    };

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        const savedUser = data.user || userData;
        localStorage.setItem('lakeb2b_user', JSON.stringify(savedUser));
        window.dispatchEvent(new Event('lakeb2b_auth_change'));
        setIsError(false);
        setMessage('Registration successful! Redirecting to home...');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setIsError(true);
        setMessage(data.message || 'Could not create account. Please try again.');
      }
    } catch {
      // Demo mode fallback
      localStorage.setItem('lakeb2b_user', JSON.stringify(userData));
      window.dispatchEvent(new Event('lakeb2b_auth_change'));
      setIsError(false);
      setMessage('Registration successful! Welcome to LakeB2B.');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#05030f',
        position: 'relative',
        color: '#ffffff',
      }}
    >
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenLogin={() => navigate('/login')}
        onOpenContactSales={() => navigate('/contact-sales')}
        onOpenSparkle={() => setSparkleOpen(true)}
        onOpenExpert={(mode) => {
          if (mode === 'talk_expert') navigate('/talk-to-an-expert');
          else if (mode === 'free_sample') navigate('/get-a-free-sample');
        }}
        user={currentUser}
      />

      {/* Main Signup Section with Cosmic Neon Background */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '110px 24px 70px 24px',
          boxSizing: 'border-box',
          backgroundImage: 'url(/login_neon_bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        {/* Subtle Darkening Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(5, 3, 15, 0.45)',
            pointerEvents: 'none',
          }}
        />

        {/* Central Split Card */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '920px',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(168, 85, 247, 0.25)',
            fontFamily: 'var(--font-body)',
            backgroundColor: '#080727',
          }}
        >
          {/* Left Column: Dark Navy Branded Banner */}
          <div
            style={{
              flex: '1.15',
              minWidth: '320px',
              backgroundColor: '#070624',
              padding: '48px 44px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  lineHeight: '1.25',
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                }}
              >
                Accelerate Pipeline<br />
                Growth with<br />
                LakeB2B
              </h1>

              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: '1.55',
                  color: '#cbd5e1',
                  maxWidth: '340px',
                }}
              >
                Access verified B2B intelligence, AI intent signals, and decision-maker direct dials on our{' '}
                <strong style={{ color: '#ffffff', fontWeight: '700' }}>SAAS platform</strong>
              </p>
            </div>

            {/* Bottom Carousel Indicator Dots */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '48px',
              }}
            >
              {/* Magenta Dot Active */}
              <span
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: '#ec4899',
                  display: 'inline-block',
                }}
              />
              {/* White Dot */}
              <span
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'inline-block',
                }}
              />
            </div>
          </div>

          {/* Right Column: Clean White Signup Form */}
          <div
            style={{
              flex: '1',
              minWidth: '320px',
              backgroundColor: '#ffffff',
              padding: '40px 42px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxSizing: 'border-box',
              color: '#0f172a',
            }}
          >
            {/* LakeB2B Brand Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
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

              <div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  Lake<span style={{ color: '#ec4899' }}>B2B</span>
                </div>
                <div style={{ fontSize: '8.5px', fontWeight: '700', letterSpacing: '0.18em', color: '#64748b', marginTop: '3px', textTransform: 'uppercase' }}>
                  ENABLING GROWTH
                </div>
              </div>
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Sign Up
            </h2>

            {/* Status / Feedback message */}
            {message && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 12px',
                  borderRadius: '6px',
                  marginBottom: '16px',
                  fontSize: '12.5px',
                  backgroundColor: isError ? '#fef2f2' : '#f0fdf4',
                  border: `1px solid ${isError ? '#fecaca' : '#bbf7d0'}`,
                  color: isError ? '#dc2626' : '#166534',
                }}
              >
                {isError ? <AlertCircle size={15} /> : <CheckCircle2 size={15} />}
                <span>{message}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Full Name */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '3px',
                  }}
                >
                  Full Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1.5px solid #d1d5db',
                    padding: '7px 0',
                    fontSize: '14px',
                    color: '#0f172a',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = '#a855f7')}
                  onBlur={(e) => (e.target.style.borderBottomColor = '#d1d5db')}
                />
              </div>

              {/* Your Email * */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '3px',
                  }}
                >
                  Business Email <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1.5px solid #d1d5db',
                    padding: '7px 0',
                    fontSize: '14px',
                    color: '#0f172a',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = '#a855f7')}
                  onBlur={(e) => (e.target.style.borderBottomColor = '#d1d5db')}
                />
              </div>

              {/* Company Name */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '3px',
                  }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1.5px solid #d1d5db',
                    padding: '7px 0',
                    fontSize: '14px',
                    color: '#0f172a',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = '#a855f7')}
                  onBlur={(e) => (e.target.style.borderBottomColor = '#d1d5db')}
                />
              </div>

              {/* Password * */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12.5px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '3px',
                  }}
                >
                  Password <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="password"
                  required
                  placeholder="Create password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  style={{
                    width: '100%',
                    border: 'none',
                    borderBottom: '1.5px solid #d1d5db',
                    padding: '7px 0',
                    fontSize: '14px',
                    color: '#0f172a',
                    outline: 'none',
                    fontFamily: 'var(--font-body)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = '#a855f7')}
                  onBlur={(e) => (e.target.style.borderBottomColor = '#d1d5db')}
                />
              </div>

              {/* Terms Checkbox */}
              <div>
                <label
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    color: '#64748b',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    style={{
                      width: '14px',
                      height: '14px',
                      accentColor: '#a855f7',
                      cursor: 'pointer',
                    }}
                  />
                  <span>I agree to the Terms of Service &amp; Privacy Policy</span>
                </label>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: '4px' }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #c026d3 0%, #a855f7 50%, #7c3aed 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '12px 28px',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 14px rgba(168, 85, 247, 0.4)',
                    transition: 'all 0.2s ease',
                    opacity: loading ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(168, 85, 247, 0.55)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(168, 85, 247, 0.4)';
                    }
                  }}
                >
                  {loading ? 'CREATING ACCOUNT...' : 'SIGN UP'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Link: Already have an account? Login */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            marginTop: '22px',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            textShadow: '0 2px 6px rgba(0,0,0,0.8)',
          }}
        >
          Already have an account?{' '}
          <Link
            to="/login"
            style={{
              color: '#38bdf8',
              fontWeight: '700',
              textDecoration: 'none',
              marginLeft: '4px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#38bdf8')}
          >
            Log in
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onOpenContactSales={() => navigate('/contact-sales')}
        onOpenExpert={(mode) => {
          if (mode === 'talk_expert') navigate('/talk-to-an-expert');
          else if (mode === 'free_sample') navigate('/get-a-free-sample');
        }}
        onOpenLogin={() => navigate('/login')}
      />

      {/* Search & Sparkle Modals */}
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

export default Signup;
