import React, { useState } from 'react';
import { X, Check, ChevronDown } from 'lucide-react';

const ContactSales = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    helpCategory: 'Talk To Sales',
    query: '',
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(7, 3, 20, 0.75)',
        backdropFilter: 'blur(8px)',
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
          maxWidth: '680px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          padding: '40px 36px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-body)',
          background: `
            radial-gradient(ellipse 60% 40% at 90% 90%, rgba(243, 232, 255, 0.7) 0%, rgba(255, 255, 255, 0) 70%),
            radial-gradient(ellipse 50% 35% at 10% 85%, rgba(243, 232, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%),
            #ffffff
          `,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#475569',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#e2e8f0')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#f1f5f9')}
        >
          <X size={18} />
        </button>

        {/* Top Label: Contact Us */}
        <div
          style={{
            fontSize: '13.5px',
            fontWeight: '600',
            color: '#0f172a',
            marginBottom: '8px',
          }}
        >
          Contact Us
        </div>

        {/* Heading: Ready To Build Your Growth Ecosystem? */}
        <h2
          style={{
            fontSize: '34px',
            fontWeight: '800',
            lineHeight: 1.18,
            color: '#0f172a',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}
        >
          Ready To Build Your Growth<br />Ecosystem?
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.55,
            color: '#475569',
            marginBottom: '30px',
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
              padding: '36px 24px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
              }}
            >
              <Check size={28} strokeWidth={2.5} />
            </div>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#166534',
                marginBottom: '8px',
              }}
            >
              Thank You! Request Received
            </h3>
            <p style={{ fontSize: '14px', color: '#15803d', lineHeight: 1.5, marginBottom: '20px' }}>
              We've received your query and our B2B solutions team will connect with you shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: '#166534',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 22px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
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
                rows={4}
                value={formData.query}
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '110px',
                }}
              />
            </div>

            {/* Checkbox: Newsletter */}
            <div>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '13px',
                  color: '#475569',
                  cursor: 'pointer',
                  lineHeight: 1.4,
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
                fontSize: '11px',
                color: '#64748b',
                lineHeight: 1.4,
                marginTop: '-6px',
              }}
            >
              By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message &amp; data rates may apply. You can reply STOP to opt-out of further messaging.
            </div>

            {/* SUBMIT Button */}
            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#6b21a8',
                  background: 'linear-gradient(135deg, #6b21a8 0%, #7c3aed 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 32px',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(107, 33, 168, 0.35)',
                }}
              >
                SUBMIT
              </button>
            </div>

            {/* YOUR PRIVACY IS SECURE WITH US */}
            <div
              style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#64748b',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              YOUR <span style={{ textDecoration: 'underline', color: '#0f172a', fontWeight: '700' }}>PRIVACY</span> IS SECURE WITH US
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactSales;
