import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Monitor, GraduationCap, Car, Flame, Factory, FlaskConical, Stethoscope } from 'lucide-react';

const industries = [
  { icon: <HeartPulse size={20} />,    title: 'Healthcare',      to: '/industries/healthcare' },
  { icon: <Monitor size={20} />,       title: 'Technology',      to: '/industries/technology' },
  { icon: <GraduationCap size={20} />, title: 'Education',       to: '/industries/education' },
  { icon: <Car size={20} />,           title: 'Automotive',      to: '/industries/automotive' },
  { icon: <Flame size={20} />,         title: 'Oil and Gas',     to: '/industries/oil-and-gas' },
  { icon: <Factory size={20} />,       title: 'Manufacturing',   to: '/industries/manufacturing' },
  { icon: <FlaskConical size={20} />,  title: 'Pharmaceutical',  to: '/industries/pharmaceutical' },
  { icon: <Stethoscope size={20} />,   title: 'Medical Devices', to: '/industries/medical-devices' },
];

const Industries = ({ onClose }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 12px 48px rgba(0,0,0,0.18)',
        width: '240px',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
        padding: '8px 0',
      }}
    >
      {industries.map((item, idx) => (
        <Link
          key={item.title}
          to={item.to}
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '12px 20px',
            textDecoration: 'none',
            color: '#111827',
            fontSize: '14.5px',
            fontWeight: '500',
            borderBottom: idx < industries.length - 1 ? '1px solid #f3f4f6' : 'none',
            transition: 'background 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f3ff')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <span
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#f0f0f8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b21a8',
              flexShrink: 0,
            }}
          >
            {item.icon}
          </span>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Industries;
