import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import TrustedPartners from './TrustedPartners';
import DataTrustSection from './DataTrustSection';
import DataSolutions from './DataSolutions';
import B2BDataCloud from './B2BDataCloud';
import RealBusinessImpact from './RealBusinessImpact';
import MultiChannelCampaigns from './MultiChannelCampaigns';
import SuccessStories from './SuccessStories';
import TrustedResults from './TrustedResults';
import GrowthInsights from './GrowthInsights';
import GrowthEcosystemCTA from './GrowthEcosystemCTA';
import Login from './Login';
import Search from './Search';
import ContactSales from './ContactSales';
import ExpertModal from './ExpertModal';
import SparkleModal from './SparkleModal';

const Home = () => {
  // Modal states
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactSalesOpen, setContactSalesOpen] = useState(false);
  const [sparkleOpen, setSparkleOpen] = useState(false);
  const [expertModal, setExpertModal] = useState({ open: false, mode: 'talk_expert', prefilledIndustry: '' });

  // User state
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const handleOpenContactSales = () => {
    navigate('/contact-sales');
  };

  // Global helper for nested component triggers
  React.useEffect(() => {
    window.openContactSales = () => navigate('/contact-sales');
    return () => {
      delete window.openContactSales;
    };
  }, [navigate]);

  const handleOpenExpert = (mode = 'talk_expert', prefilledIndustry = '') => {
    if (mode === 'talk_expert') {
      navigate('/talk-to-an-expert');
    } else if (mode === 'free_sample') {
      navigate('/get-a-free-sample');
    } else {
      setExpertModal({ open: true, mode, prefilledIndustry });
    }
  };

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#070314', color: '#ffffff', position: 'relative' }}>
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenContactSales={handleOpenContactSales}
        onOpenSparkle={() => setSparkleOpen(true)}
        onOpenExpert={handleOpenExpert}
        user={currentUser}
      />

      {/* Main Hero Body (Exact screenshot replication) */}
      <main>
        <Body
          onOpenExpert={handleOpenExpert}
          onOpenContactSales={handleOpenContactSales}
        />
        <TrustedPartners />
        <DataTrustSection />
        <DataSolutions />
        <B2BDataCloud />
        <RealBusinessImpact
          onOpenContactSales={handleOpenContactSales}
          onOpenExpert={handleOpenExpert}
        />
        <MultiChannelCampaigns
          onOpenContactSales={handleOpenContactSales}
          onOpenExpert={handleOpenExpert}
        />
        <SuccessStories
          onOpenContactSales={handleOpenContactSales}
          onOpenExpert={handleOpenExpert}
        />
        <TrustedResults />
        <GrowthInsights
          onOpenContactSales={handleOpenContactSales}
          onOpenExpert={handleOpenExpert}
        />
        <GrowthEcosystemCTA
          onOpenContactSales={handleOpenContactSales}
          onOpenExpert={handleOpenExpert}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContactSales={handleOpenContactSales}
        onOpenExpert={handleOpenExpert}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {/* Interactive Modals as separate modules */}
      <Login
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <Search
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={(item) => {
          if (item.category === 'Solutions') handleOpenContactSales();
          else if (item.category === 'Data Intelligence') handleOpenExpert('talk_expert');
          else handleOpenExpert('free_sample');
        }}
      />

      <ContactSales
        isOpen={contactSalesOpen}
        onClose={() => setContactSalesOpen(false)}
      />

      <ExpertModal
        isOpen={expertModal.open}
        mode={expertModal.mode}
        prefilledIndustry={expertModal.prefilledIndustry}
        onClose={() => setExpertModal({ open: false, mode: 'talk_expert', prefilledIndustry: '' })}
      />

      <SparkleModal
        isOpen={sparkleOpen}
        onClose={() => setSparkleOpen(false)}
      />
    </div >
  );
};

export default Home;
