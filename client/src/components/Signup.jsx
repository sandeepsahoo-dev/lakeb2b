import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';

const Signup = ({ isOpen, onClose, onSignupSuccess }) => {
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

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setIsError(true);
      setMessage('Please enter all required fields.');
      return;
    }

    setLoading(true);
    setIsError(false);
    setMessage(null);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsError(false);
        setMessage('Registration successful! Welcome to LakeB2B.');
        if (onSignupSuccess) onSignupSuccess(data.user);
        setTimeout(() => onClose(), 1200);
      } else {
        setIsError(true);
        setMessage(data.message || 'Registration failed.');
      }
    } catch {
      // Demo fallback
      setIsError(false);
      setMessage('Registered in Demo Mode! Welcome to LakeB2B.');
      if (onSignupSuccess) onSignupSuccess({ name: formData.name, email: formData.email });
      setTimeout(() => onClose(), 1200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 3, 15, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          borderRadius: '16px',
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(168, 85, 247, 0.3)',
          fontFamily: 'var(--font-body)',
          backgroundColor: '#080727',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#475569',
            zIndex: 10,
          }}
        >
          <X size={16} />
        </button>

        {/* Left Column */}
        <div
          style={{
            flex: '1.15',
            minWidth: '300px',
            backgroundColor: '#070624',
            padding: '44px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: '30px',
                fontWeight: '800',
                lineHeight: '1.25',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
                marginBottom: '18px',
              }}
            >
              Accelerate Pipeline<br />
              Growth with<br />
              LakeB2B
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.55',
                color: '#cbd5e1',
                maxWidth: '320px',
              }}
            >
              Access verified B2B intelligence and decision-maker data on our{' '}
              <strong style={{ color: '#ffffff', fontWeight: '700' }}>SAAS platform</strong>
            </p>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '40px' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ec4899' }} />
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ffffff' }} />
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: '#ffffff',
            padding: '38px 38px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxSizing: 'border-box',
            color: '#0f172a',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <svg width="32" height="32" viewBox="0 0 34 34" fill="none">
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
              <div style={{ fontSize: '19px', fontWeight: '800', color: '#0f172a', lineHeight: 1 }}>
                Lake<span style={{ color: '#ec4899' }}>B2B</span>
              </div>
              <div style={{ fontSize: '8px', fontWeight: '700', letterSpacing: '0.18em', color: '#64748b', marginTop: '3px', textTransform: 'uppercase' }}>
                ENABLING GROWTH
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '18px' }}>
            Sign Up
          </h3>

          {message && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
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

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0f172a', marginBottom: '3px' }}>
                Full Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', border: 'none', borderBottom: '1.5px solid #d1d5db', padding: '6px 0', fontSize: '13.5px', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0f172a', marginBottom: '3px' }}>
                Business Email <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', border: 'none', borderBottom: '1.5px solid #d1d5db', padding: '6px 0', fontSize: '13.5px', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#0f172a', marginBottom: '3px' }}>
                Password <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="password"
                required
                placeholder="Create password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                style={{ width: '100%', border: 'none', borderBottom: '1.5px solid #d1d5db', padding: '6px 0', fontSize: '13.5px', outline: 'none' }}
              />
            </div>

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
                  padding: '10px 24px',
                  fontSize: '12.5px',
                  fontWeight: '700',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
                }}
              >
                {loading ? 'CREATING ACCOUNT...' : 'SIGN UP'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
