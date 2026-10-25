import React, { useState } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
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

  // Global helper for nested component triggers
  React.useEffect(() => {
    window.openContactSales = () => setContactSalesOpen(true);
    return () => {
      delete window.openContactSales;
    };
  }, []);

  const handleOpenExpert = (mode = 'talk_expert', prefilledIndustry = '') => {
    setExpertModal({ open: true, mode, prefilledIndustry });
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
        onOpenContactSales={() => setContactSalesOpen(true)}
        onOpenSparkle={() => setSparkleOpen(true)}
        onOpenExpert={handleOpenExpert}
        user={currentUser}
      />

      {/* Main Hero Body (Exact screenshot replication) */}
      <main>
        <Body
          onOpenExpert={handleOpenExpert}
          onOpenContactSales={() => setContactSalesOpen(true)}
        />
        <DataTrustSection />
        <DataSolutions />
        <B2BDataCloud />
        <RealBusinessImpact
          onOpenContactSales={() => setContactSalesOpen(true)}
          onOpenExpert={handleOpenExpert}
        />
        <MultiChannelCampaigns
          onOpenContactSales={() => setContactSalesOpen(true)}
          onOpenExpert={handleOpenExpert}
        />
        <SuccessStories
          onOpenContactSales={() => setContactSalesOpen(true)}
          onOpenExpert={handleOpenExpert}
        />
        <TrustedResults />
        <GrowthInsights
          onOpenContactSales={() => setContactSalesOpen(true)}
          onOpenExpert={handleOpenExpert}
        />
        <GrowthEcosystemCTA
          onOpenContactSales={() => setContactSalesOpen(true)}
          onOpenExpert={handleOpenExpert}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContactSales={() => setContactSalesOpen(true)}
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
          if (item.category === 'Solutions') setContactSalesOpen(true);
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
    </div>
  );
};

export default Home;
