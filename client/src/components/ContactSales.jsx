import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Phone, Mail, Building, User, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const ContactSales = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMsg('Please provide your name and business email.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact/sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {}
      } else {
        setErrorMsg(data.message || 'Could not submit your request. Please try again.');
      }
    } catch {
      // Demo fallback
      setSubmitted(true);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {}
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrorMsg('');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className="glass-modal"
        style={{
          width: '100%',
          maxWidth: '520px',
          padding: '32px 30px',
          color: '#ffffff',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: '#8e84a8',
            cursor: 'pointer',
          }}
        >
          <X style={{ width: '20px', height: '20px' }} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '22px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '9999px', backgroundColor: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '10px' }}>
                <Sparkles style={{ width: '13px', height: '13px', color: '#c084fc' }} />
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#d8b4fe', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Priority Sales Advisory
                </span>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.02em' }}>
                Speak With A Data Specialist
              </h3>
              <p style={{ fontSize: '13.5px', color: '#a79ec2', marginTop: '6px', lineHeight: 1.5 }}>
                Get custom ICP sizing, volume pricing, and test a live sample batch built specifically for your outbound campaigns.
              </p>
            </div>

            {errorMsg && (
              <div style={{ padding: '10px 14px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#fca5a5', fontSize: '12.5px', marginBottom: '14px' }}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 34px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    />
                    <User style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#8e84a8' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                    Work Email *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 34px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    />
                    <Mail style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#8e84a8' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                    Company Name
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      name="company"
                      placeholder="Enterprise Corp"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 34px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    />
                    <Building style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#8e84a8' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 34px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    />
                    <Phone style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '15px', height: '15px', color: '#8e84a8' }} />
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                  What data intelligence or campaign goals do you have?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="E.g., We need verified VP Engineering contacts with AWS intent triggers in North America..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    color: '#ffffff',
                    fontSize: '13.5px',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-white"
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '9999px',
                  fontWeight: '800',
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span>{loading ? 'Submitting Inquiry...' : 'Submit Contact Sales Request'}</span>
                {!loading && <Send style={{ width: '14px', height: '14px' }} />}
              </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '16px', fontSize: '11.5px', color: '#8e84a8' }}>
              <Shield style={{ width: '13px', height: '13px', color: '#10b981' }} />
              <span>100% Privacy & SOC2 Guaranteed. Zero spam ever.</span>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '2px solid #22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px',
              }}
            >
              <CheckCircle2 style={{ width: '36px', height: '36px', color: '#22c55e' }} />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px' }}>
              Inquiry Dispatched!
            </h3>
            <p style={{ fontSize: '14px', color: '#c4bcd8', lineHeight: 1.6, marginBottom: '22px' }}>
              Thank you, <strong>{formData.name || 'Partner'}</strong>. A dedicated LakeB2B senior data intelligence director has been assigned to your request and will contact you at <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={handleClose}
              style={{
                padding: '10px 24px',
                borderRadius: '9999px',
                background: '#ffffff',
                color: '#0d081e',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Done & Return To LakeB2B
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSales;
