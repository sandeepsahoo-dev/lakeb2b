import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ArrowUpRight, Tag, Database, Sparkles } from 'lucide-react';

const Search = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const quickTags = ['Intent Signals', 'API Enrichment', 'Healthcare Data', 'SaaS Leads', 'ABM', 'Cold Outreach'];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      handleSearch('');
    }
  }, [isOpen]);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
      const data = await res.json();
      if (data.results) {
        setResults(data.results);
      }
    } catch {
      // Fallback
      setResults([
        {
          category: 'Data Intelligence',
          title: 'Custom B2B Contact Databases',
          description: 'Triple-verified email, direct dials, and org charts for over 450M global contacts.',
          tag: 'Intelligence',
        },
        {
          category: 'Data Intelligence',
          title: 'Real-Time Intent Signals',
          description: 'Track buying surges across 12,000+ topics with dynamic intent monitoring.',
          tag: 'Signals',
        },
        {
          category: 'Solutions',
          title: 'Hand-Off Campaign Outbound SDRs',
          description: 'Hand your whole cold outreach campaign to our experienced LakeB2B team.',
          tag: 'Solutions',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onQueryChange = (val) => {
    setQuery(val);
    handleSearch(val);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="glass-modal"
        style={{
          width: '100%',
          maxWidth: '640px',
          padding: '24px',
          color: '#ffffff',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(168, 85, 247, 0.25)', paddingBottom: '16px' }}>
          <SearchIcon style={{ width: '22px', height: '22px', color: '#c084fc' }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search B2B data signals, industries, APIs, solutions..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '16px',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
          {query && (
            <button
              onClick={() => onQueryChange('')}
              style={{ background: 'transparent', border: 'none', color: '#8e84a8', cursor: 'pointer', padding: '4px' }}
            >
              <X style={{ width: '16px', height: '16px' }} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '11.5px',
              cursor: 'pointer',
            }}
          >
            ESC
          </button>
        </div>

        {/* Quick tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '14px 0 18px' }}>
          <span style={{ fontSize: '11px', color: '#8e84a8', alignSelf: 'center' }}>Popular:</span>
          {quickTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => onQueryChange(tag)}
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '9999px',
                backgroundColor: query === tag ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                color: '#e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div style={{ maxHeight: '340px', overflowY: 'auto', paddingRight: '4px' }}>
          {loading && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#9d94b8', fontSize: '13px' }}>
              Searching LakeB2B intelligence network...
            </div>
          )}

          {!loading && results.length === 0 && (
            <div style={{ padding: '30px', textAlign: 'center', color: '#9d94b8' }}>
              <p style={{ fontSize: '14px' }}>No direct matches for "{query}".</p>
              <p style={{ fontSize: '12px', marginTop: '6px' }}>
                Try searching for "API", "Healthcare", "Decision Makers", or "Outreach".
              </p>
            </div>
          )}

          {!loading &&
            results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  if (onSelectResult) onSelectResult(item);
                  onClose();
                }}
                style={{
                  padding: '12px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        fontSize: '9.5px',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(168, 85, 247, 0.25)',
                        color: '#d8b4fe',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.category}
                    </span>
                    <h5 style={{ fontSize: '14px', fontWeight: '600' }}>{item.title}</h5>
                  </div>
                  <ArrowUpRight style={{ width: '14px', height: '14px', color: '#9d94b8' }} />
                </div>
                <p style={{ fontSize: '12px', color: '#b6adc9', lineHeight: 1.4 }}>{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
