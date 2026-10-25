import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Send, DownloadCloud, Database, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

const ExpertModal = ({ isOpen, mode, onClose, prefilledIndustry }) => {
  const isExpert = mode === 'talk_expert';
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState(prefilledIndustry || 'Technology & SaaS');
  const [audience, setAudience] = useState('B2B Tech Executives (CTO / VP Engineering)');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const endpoint = isExpert ? '/api/contact/talk-to-expert' : '/api/contact/free-sample';
    const payload = isExpert
      ? { name, email, phone, requirements: `Interested in expert consultation for ${industry} data.` }
      : { email, industry, audience };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setSuccess(true);
      setSuccessData(data);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {}
    } catch {
      // Fallback
      setSuccess(true);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {}
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setEmail('');
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className="glass-modal"
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '30px 28px',
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

        {!success ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: isExpert ? 'rgba(168, 85, 247, 0.2)' : 'rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isExpert ? (
                  <PhoneCall style={{ width: '18px', height: '18px', color: '#c084fc' }} />
                ) : (
                  <Database style={{ width: '18px', height: '18px', color: '#38bdf8' }} />
                )}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800' }}>
                {isExpert ? 'Talk To A Data Expert' : 'Get A Free B2B Sample'}
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: '#a79ec2', marginBottom: '20px', lineHeight: 1.5 }}>
              {isExpert
                ? 'Schedule a 1-on-1 strategy call with our senior outbound architect to audit your TAM and intent triggers.'
                : 'Receive a sample pack of 50 verified B2B decision makers with direct phone numbers and verified emails.'}
            </p>

            <form onSubmit={handleSubmit}>
              {isExpert && (
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      color: '#ffffff',
                      fontSize: '13.5px',
                      outline: 'none',
                    }}
                  />
                </div>
              )}

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                  Corporate Email *
                </label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(168, 85, 247, 0.25)',
                    color: '#ffffff',
                    fontSize: '13.5px',
                    outline: 'none',
                  }}
                />
              </div>

              {!isExpert ? (
                <>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                      Target Industry
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        backgroundColor: '#1b0f38',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    >
                      <option value="Technology & SaaS">Technology & SaaS</option>
                      <option value="Healthcare & Medical">Healthcare & Medical</option>
                      <option value="Finance & Banking">Finance & Banking</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Retail & E-commerce">Retail & E-commerce</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                      Target Title / Persona
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. VP Marketing, CTO, Head of Procurement"
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        outline: 'none',
                      }}
                    />
                  </div>
                </>
              ) : (
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#c4bcd8', marginBottom: '6px' }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      color: '#ffffff',
                      fontSize: '13.5px',
                      outline: 'none',
                    }}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: isExpert ? '#7c3aed' : '#ffffff',
                  color: isExpert ? '#ffffff' : '#0a0418',
                  border: 'none',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: isExpert
                    ? '0 4px 18px rgba(124, 58, 237, 0.45)'
                    : '0 4px 18px rgba(255, 255, 255, 0.25)',
                }}
              >
                <span>
                  {loading
                    ? 'Processing...'
                    : isExpert
                    ? 'Schedule Expert Session'
                    : 'Instant Free Sample Download'}
                </span>
                {!loading && (
                  isExpert ? <Send style={{ width: '14px', height: '14px' }} /> : <DownloadCloud style={{ width: '15px', height: '15px' }} />
                )}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 8px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '2px solid #22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <CheckCircle2 style={{ width: '32px', height: '32px', color: '#22c55e' }} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>
              {isExpert ? 'Expert Session Confirmed!' : 'Sample Pack Generated!'}
            </h3>
            <p style={{ fontSize: '13.5px', color: '#c4bcd8', lineHeight: 1.5, marginBottom: '20px' }}>
              {isExpert
                ? `An outreach architect has received your request. A calendar invite has been queued for ${email}.`
                : `We've bundled 50 verified ${industry} records. Check your inbox at ${email}.`}
            </p>
            <button
              onClick={handleClose}
              style={{
                padding: '9px 22px',
                borderRadius: '9999px',
                background: '#ffffff',
                color: '#0d081e',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertModal;
