import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

// Data Intelligence pages
import CompanyAPI from './pages/CompanyAPI';
import PeopleAPI from './pages/PeopleAPI';
import JobAPI from './pages/JobAPI';
import B2BCustomData from './pages/B2BCustomData';
import HealthcareData from './pages/HealthcareData';
import TechInstallData from './pages/TechInstallData';
import BrowseByGeography from './pages/BrowseByGeography';
import BrowseByIndustry from './pages/BrowseByIndustry';

// Solutions pages – DATA
import Enrichment from './pages/solutions/Enrichment';
import DataHygiene from './pages/solutions/DataHygiene';
import Appending from './pages/solutions/Appending';
import Cleansing from './pages/solutions/Cleansing';

// Solutions pages – Marketing Suite
import EmailCampaignManagement from './pages/solutions/EmailCampaignManagement';
import AccountBasedMarketing from './pages/solutions/AccountBasedMarketing';
import WebinarsEventManagement from './pages/solutions/WebinarsEventManagement';
import GTM from './pages/solutions/GTM';
import BespokeGrowthSolutions from './pages/solutions/BespokeGrowthSolutions';
import ExperienceDesign from './pages/solutions/ExperienceDesign';

// Industries pages
import Healthcare from './pages/industries/Healthcare';
import Technology from './pages/industries/Technology';
import Education from './pages/industries/Education';
import Automotive from './pages/industries/Automotive';
import OilAndGas from './pages/industries/OilAndGas';
import Manufacturing from './pages/industries/Manufacturing';
import Pharmaceutical from './pages/industries/Pharmaceutical';
import MedicalDevices from './pages/industries/MedicalDevices';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Data Intelligence */}
        <Route path="/data-intelligence/company-api" element={<CompanyAPI />} />
        <Route path="/data-intelligence/people-api" element={<PeopleAPI />} />
        <Route path="/data-intelligence/job-api" element={<JobAPI />} />
        <Route path="/data-intelligence/b2b-custom-data" element={<B2BCustomData />} />
        <Route path="/data-intelligence/healthcare-data" element={<HealthcareData />} />
        <Route path="/data-intelligence/tech-install-data" element={<TechInstallData />} />
        <Route path="/data-intelligence/browse-by-geography" element={<BrowseByGeography />} />
        <Route path="/data-intelligence/browse-by-industry" element={<BrowseByIndustry />} />

        {/* Solutions – Data */}
        <Route path="/solutions/enrichment" element={<Enrichment />} />
        <Route path="/solutions/data-hygiene" element={<DataHygiene />} />
        <Route path="/solutions/appending" element={<Appending />} />
        <Route path="/solutions/cleansing" element={<Cleansing />} />

        {/* Solutions – Marketing Suite */}
        <Route path="/solutions/email-campaign-management" element={<EmailCampaignManagement />} />
        <Route path="/solutions/account-based-marketing" element={<AccountBasedMarketing />} />
        <Route path="/solutions/webinars-event-management" element={<WebinarsEventManagement />} />
        <Route path="/solutions/gtm" element={<GTM />} />
        <Route path="/solutions/bespoke-growth-solutions" element={<BespokeGrowthSolutions />} />
        <Route path="/solutions/experience-design" element={<ExperienceDesign />} />

        {/* Industries */}
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/technology" element={<Technology />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/oil-and-gas" element={<OilAndGas />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/pharmaceutical" element={<Pharmaceutical />} />
        <Route path="/industries/medical-devices" element={<MedicalDevices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
