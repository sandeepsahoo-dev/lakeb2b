import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ChevronDown, Sparkles, Menu, X, User, LogOut } from 'lucide-react';
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
  const [authProfile, setAuthProfile] = useState(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  // Sync auth user from localStorage & events
  useEffect(() => {
    const syncUser = () => {
      try {
        const stored = localStorage.getItem('lakeb2b_user');
        if (stored) {
          setAuthProfile(JSON.parse(stored));
        } else if (user) {
          setAuthProfile(user);
        } else {
          setAuthProfile(null);
        }
      } catch {
        setAuthProfile(user || null);
      }
    };
    syncUser();
    window.addEventListener('storage', syncUser);
    window.addEventListener('lakeb2b_auth_change', syncUser);
    return () => {
      window.removeEventListener('storage', syncUser);
      window.removeEventListener('lakeb2b_auth_change', syncUser);
    };
  }, [user]);

  // Close profile dropdown on click outside
  useEffect(() => {
    const handleProfileOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleProfileOutside);
    return () => document.removeEventListener('mousedown', handleProfileOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('lakeb2b_user');
    setAuthProfile(null);
    setProfileDropdownOpen(false);
    window.dispatchEvent(new Event('lakeb2b_auth_change'));
  };

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

          {/* Profile Icon + 1st Name OR LOG IN */}
          {authProfile ? (
            <div ref={profileRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setProfileDropdownOpen((prev) => !prev)}
                style={{
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                  color: '#ffffff',
                  borderRadius: '24px',
                  padding: '5px 12px 5px 6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(168, 85, 247, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.35)';
                }}
              >
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <User size={14} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.02em',
                    color: '#ffffff',
                  }}
                >
                  {authProfile.name ? authProfile.name.trim().split(' ')[0] : 'User'}
                </span>
                <ChevronDown
                  size={14}
                  style={{
                    color: '#c084fc',
                    transform: profileDropdownOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>

              {profileDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '44px',
                    right: 0,
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    borderRadius: '12px',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.25)',
                    padding: '12px',
                    minWidth: '180px',
                    zIndex: 100,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <div style={{ padding: '4px 8px', borderBottom: '1px solid #f1f5f9', marginBottom: '8px' }}>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: '#0f172a' }}>
                      {authProfile.name}
                    </div>
                    {authProfile.email && (
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px', wordBreak: 'break-all' }}>
                        {authProfile.email}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      background: '#fef2f2',
                      border: 'none',
                      borderRadius: '6px',
                      color: '#dc2626',
                      padding: '8px 12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      justifyContent: 'center',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#fee2e2')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#fef2f2')}
                  >
                    <LogOut size={13} /> Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLoginClick}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
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
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
            >
              LOG IN
            </button>
          )}

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
