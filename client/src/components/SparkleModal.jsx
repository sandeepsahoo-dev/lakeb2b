import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, CheckCircle2, ArrowRight } from 'lucide-react';

const SparkleModal = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);
  const [thinking, setThinking] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'Find 250 FinTech CTOs in North America buying Cloud Security',
    'Show me active intent surges in Healthcare IT',
    'Enrich list of Fortune 500 VP Operations with direct dials',
  ];

  const handleGenerate = (queryText) => {
    const text = queryText || prompt;
    if (!text) return;
    setThinking(true);
    setResponse(null);

    setTimeout(() => {
      setThinking(false);
      setResponse({
        query: text,
        estimatedTAM: '18,420 Verified Records',
        topIntentKeywords: ['SOC 2 Compliance', 'Cloud Cost Optimization', 'API Gateways'],
        sampleTitles: ['VP of Infrastructure', 'Chief Information Security Officer', 'Head of DevOps'],
        accuracyGrade: '97.2% Verified Deliverability',
      });
    }, 900);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="glass-modal"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '28px',
          color: '#ffffff',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(168, 85, 247, 0.6)',
            }}
          >
            <Sparkles style={{ width: '18px', height: '18px', color: '#ffffff' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '800' }}>LakeB2B AI Audience Copilot</h3>
            <p style={{ fontSize: '12.5px', color: '#a79ec2' }}>
              Instant AI synthesis of 450M+ verified global B2B profiles and intent surges.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '16px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="e.g. Target VP Sales at B2B SaaS companies using Salesforce in UK..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              style={{
                flex: 1,
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#ffffff',
                fontSize: '13.5px',
                outline: 'none',
              }}
            />
            <button
              onClick={() => handleGenerate()}
              disabled={thinking}
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                border: 'none',
                color: '#ffffff',
                padding: '0 18px',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>{thinking ? 'Analyzing...' : 'Generate'}</span>
              <Send style={{ width: '14px', height: '14px' }} />
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPrompt(q);
                handleGenerate(q);
              }}
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(168, 85, 247, 0.12)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                color: '#d8b4fe',
                cursor: 'pointer',
              }}
            >
              ✦ {q}
            </button>
          ))}
        </div>

        {response && (
          <div
            style={{
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(124, 58, 237, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#c084fc' }}>
                AI Audience Discovery
              </span>
              <span style={{ fontSize: '11.5px', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 style={{ width: '13px', height: '13px' }} />
                {response.accuracyGrade}
              </span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px' }}>
              {response.estimatedTAM}
            </div>
            <div style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '6px' }}>
              <strong>Intent Keywords:</strong> {response.topIntentKeywords.join(', ')}
            </div>
            <div style={{ fontSize: '12px', color: '#cbd5e1' }}>
              <strong>Matched Roles:</strong> {response.sampleTitles.join(', ')}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={() => {
              onClose();
              if (window.openContactSales) window.openContactSales();
            }}
            style={{
              background: '#ffffff',
              color: '#0a0418',
              border: 'none',
              padding: '8px 18px',
              borderRadius: '9999px',
              fontWeight: '700',
              fontSize: '12.5px',
              cursor: 'pointer',
            }}
          >
            Deploy This Audience Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default SparkleModal;
