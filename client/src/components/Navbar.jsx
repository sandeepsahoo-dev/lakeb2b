import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ChevronDown, Sparkles, Menu, X } from 'lucide-react';
import DataIntelligence from './DataIntelligence';
import Solutions from './Solutions';
import Industries from './Industries';
import AboutUs from './AboutUs';
import Resources from './Resources';

const Navbar = ({
  onOpenSearch,
  onOpenLogin,
  onOpenContactSales,
  onOpenSparkle,
  onOpenExpert,
  user,
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const handleContactSalesClick = () => {
    if (onOpenContactSales) {
      onOpenContactSales();
    } else {
      navigate('/contact-sales');
    }
  };

  const handleLoginClick = () => {
    if (onOpenLogin) {
      onOpenLogin();
    } else {
      navigate('/login');
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleDropdownAction = (actionType, extraData) => {
    setActiveDropdown(null);
    if (actionType === 'contact_sales') onOpenContactSales();
    else if (actionType === 'talk_expert') onOpenExpert('talk_expert');
    else if (actionType === 'free_sample') onOpenExpert('free_sample', extraData);
  };

  return (
    <header
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'rgba(8, 4, 20, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(168, 85, 247, 0.12)',
        height: '76px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            userSelect: 'none',
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveDropdown(null);
          }}
        >
          {/* LakeB2B Dot Matrix Icon */}
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}
              >
                Lake
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#ec4899',
                  letterSpacing: '-0.02em',
                }}
              >
                B2B
              </span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '8px',
                fontWeight: '700',
                color: '#cbd5e1',
                letterSpacing: '0.22em',
                marginTop: '3px',
                textTransform: 'uppercase',
              }}
            >
              ENABLING GROWTH
            </div>
          </div>
        </div>

        {/* Center Navigation Links with Dropdown Carets */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          {/* Data Intelligence */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => toggleDropdown('data_intelligence')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'data_intelligence' ? '#c084fc' : '#ffffff',
                fontSize: '14.5px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
              onMouseLeave={(e) => {
                if (activeDropdown !== 'data_intelligence') e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>Data Intelligence</span>
              <ChevronDown
                style={{
                  width: '14px',
                  height: '14px',
                  transition: 'transform 0.2s ease',
                  transform: activeDropdown === 'data_intelligence' ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>
            {activeDropdown === 'data_intelligence' && (
              <div
                className="glass-modal"
                style={{
                  position: 'absolute',
                  top: '46px',
                  left: '50%',
                  transform: 'translateX(-30%)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 85, 247, 0.3)',
                }}
              >
                <DataIntelligence
                  onClose={() => setActiveDropdown(null)}
                />
              </div>
            )}
          </div>

          {/* Solutions */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => toggleDropdown('solutions')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'solutions' ? '#c084fc' : '#ffffff',
                fontSize: '14.5px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
              onMouseLeave={(e) => {
                if (activeDropdown !== 'solutions') e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>Solutions</span>
              <ChevronDown
                style={{
                  width: '14px',
                  height: '14px',
                  transition: 'transform 0.2s ease',
                  transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>
            {activeDropdown === 'solutions' && (
              <div
                className="glass-modal"
                style={{
                  position: 'absolute',
                  top: '46px',
                  left: '50%',
                  transform: 'translateX(-40%)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 85, 247, 0.3)',
                }}
              >
                <Solutions
                  onClose={() => setActiveDropdown(null)}
                />
              </div>
            )}
          </div>

          {/* Industries */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => toggleDropdown('industries')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'industries' ? '#c084fc' : '#ffffff',
                fontSize: '14.5px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
              onMouseLeave={(e) => {
                if (activeDropdown !== 'industries') e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>Industries</span>
              <ChevronDown
                style={{
                  width: '14px',
                  height: '14px',
                  transition: 'transform 0.2s ease',
                  transform: activeDropdown === 'industries' ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>
            {activeDropdown === 'industries' && (
              <div
                className="glass-modal"
                style={{
                  position: 'absolute',
                  top: '46px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 85, 247, 0.3)',
                }}
              >
                <Industries
                  onClose={() => setActiveDropdown(null)}
                />
              </div>
            )}
          </div>

          {/* About Us */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => toggleDropdown('about_us')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'about_us' ? '#c084fc' : '#ffffff',
                fontSize: '14.5px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
              onMouseLeave={(e) => {
                if (activeDropdown !== 'about_us') e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>About Us</span>
              <ChevronDown
                style={{
                  width: '14px',
                  height: '14px',
                  transition: 'transform 0.2s ease',
                  transform: activeDropdown === 'about_us' ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>
            {activeDropdown === 'about_us' && (
              <div
                className="glass-modal"
                style={{
                  position: 'absolute',
                  top: '46px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 85, 247, 0.3)',
                }}
              >
                <AboutUs
                  onClose={() => setActiveDropdown(null)}
                />
              </div>
            )}
          </div>

          {/* Resources */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => toggleDropdown('resources')}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeDropdown === 'resources' ? '#c084fc' : '#ffffff',
                fontSize: '14.5px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                padding: '8px 4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
              onMouseLeave={(e) => {
                if (activeDropdown !== 'resources') e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>Resources</span>
              <ChevronDown
                style={{
                  width: '14px',
                  height: '14px',
                  transition: 'transform 0.2s ease',
                  transform: activeDropdown === 'resources' ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>
            {activeDropdown === 'resources' && (
              <div
                className="glass-modal"
                style={{
                  position: 'absolute',
                  top: '46px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 85, 247, 0.3)',
                }}
              >
                <Resources
                  onClose={() => setActiveDropdown(null)}
                />
              </div>
            )}
          </div>
        </nav>

        {/* Right Action Cluster */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            aria-label="Search LakeB2B"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '50%',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
          >
            <SearchIcon style={{ width: '18px', height: '18px' }} />
          </button>

          {/* LOG IN */}
          <button
            onClick={handleLoginClick}
            style={{
              background: 'transparent',
              border: 'none',
              color: user ? '#c084fc' : '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: '6px 4px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#c084fc')}
            onMouseLeave={(e) => {
              if (!user) e.currentTarget.style.color = '#ffffff';
            }}
          >
            {user ? user.name.split(' ')[0] : 'LOG IN'}
          </button>

          {/* CONTACT SALES Pill Button */}
          <button
            onClick={handleContactSalesClick}
            className="btn-pill-white"
          >
            CONTACT SALES
          </button>

          {/* Sparkle AI Circular Button */}
          <button
            onClick={onOpenSparkle}
            className="btn-sparkle"
            aria-label="AI Audience Intelligence"
            title="LakeB2B AI Audience Copilot"
          >
            <Sparkles style={{ width: '19px', height: '19px' }} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
