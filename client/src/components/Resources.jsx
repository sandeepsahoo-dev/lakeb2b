import React from 'react';
import { Link } from 'react-router-dom';
import { FileSearch, MessageSquare, FileText, Newspaper, Target, Video } from 'lucide-react';

const resourcesList = [
  {
    icon: <FileSearch size={21} strokeWidth={1.8} />,
    title: 'Case Studies',
    to: '/resources/case-studies',
  },
  {
    icon: <MessageSquare size={21} strokeWidth={1.8} />,
    title: 'Testimonials',
    to: '/resources/testimonials',
  },
  {
    icon: <FileSearch size={21} strokeWidth={1.8} />,
    title: 'News',
    to: '/resources/news',
  },
  {
    icon: <FileText size={21} strokeWidth={1.8} />,
    title: 'Whitepapers',
    to: '/resources/whitepapers',
  },
  {
    icon: <Newspaper size={21} strokeWidth={1.8} />,
    title: 'Blog',
    to: '/resources/blog',
  },
  {
    icon: <Target size={21} strokeWidth={1.8} />,
    title: 'Marketing Tools',
    to: '/resources/marketing-tools',
  },
  {
    icon: <Video size={21} strokeWidth={1.8} />,
    title: 'Videos',
    to: '/resources/videos',
  },
];

const Resources = ({ onClose }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 14px 44px rgba(0,0,0,0.2)',
        width: '235px',
        overflow: 'hidden',
        fontFamily: 'var(--font-body)',
        padding: '8px 0',
      }}
    >
      {resourcesList.map((item, idx) => (
        <Link
          key={item.title}
          to={item.to}
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '13px 22px',
            textDecoration: 'none',
            color: '#2a2744',
            fontSize: '14.5px',
            fontWeight: '500',
            borderBottom: idx < resourcesList.length - 1 ? '1px dashed #e2e8f0' : 'none',
            transition: 'background 0.15s ease, color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f5f3ff';
            e.currentTarget.style.color = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#2a2744';
          }}
        >
          <span style={{ color: '#475569', display: 'flex', alignItems: 'center' }}>
            {item.icon}
          </span>
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Resources;
