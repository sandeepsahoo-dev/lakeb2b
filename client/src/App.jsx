import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

// Talk To An Expert page
import TalkToExpert from './pages/TalkToExpert';

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

// About Us pages
import AboutLakeB2B from './pages/aboutus/AboutLakeB2B';
import ResellerPartner from './pages/aboutus/ResellerPartner';
import Whitelabel from './pages/aboutus/Whitelabel';
import NewsAndEvents from './pages/aboutus/NewsAndEvents';
import Customers from './pages/aboutus/Customers';

// Resources pages
import CaseStudies from './pages/resources/CaseStudies';
import Testimonials from './pages/resources/Testimonials';
import News from './pages/resources/News';
import Whitepapers from './pages/resources/Whitepapers';
import Blog from './pages/resources/Blog';
import MarketingTools from './pages/resources/MarketingTools';
import Videos from './pages/resources/Videos';
import OutboundBenchmarkReport from './pages/resources/OutboundBenchmarkReport';
import IntentSignalsPlaybook from './pages/resources/IntentSignalsPlaybook';
import EnterpriseCaseStudy from './pages/resources/EnterpriseCaseStudy';
import RoiCalculator from './pages/resources/RoiCalculator';
import FreeSamplePack from './pages/resources/FreeSamplePack';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Talk To An Expert */}
        <Route path="/talk-to-an-expert" element={<TalkToExpert />} />
        <Route path="/talk-to-expert" element={<TalkToExpert />} />

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

        {/* About Us */}
        <Route path="/about/about-lakeb2b" element={<AboutLakeB2B />} />
        <Route path="/about/reseller-partner" element={<ResellerPartner />} />
        <Route path="/about/whitelabel" element={<Whitelabel />} />
        <Route path="/about/news-and-events" element={<NewsAndEvents />} />
        <Route path="/about/customers" element={<Customers />} />

        {/* Resources */}
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/resources/testimonials" element={<Testimonials />} />
        <Route path="/resources/news" element={<News />} />
        <Route path="/resources/whitepapers" element={<Whitepapers />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/blogs" element={<Blog />} />
        <Route path="/resources/marketing-tools" element={<MarketingTools />} />
        <Route path="/resources/videos" element={<Videos />} />
        <Route path="/resources/outbound-benchmark-report" element={<OutboundBenchmarkReport />} />
        <Route path="/resources/intent-signals-playbook" element={<IntentSignalsPlaybook />} />
        <Route path="/resources/enterprise-case-study" element={<EnterpriseCaseStudy />} />
        <Route path="/resources/roi-calculator" element={<RoiCalculator />} />
        <Route path="/resources/free-sample-pack" element={<FreeSamplePack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
