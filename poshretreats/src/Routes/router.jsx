// src/Routes/router.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/Homepage'; 
import AboutUs from '../Pages/AboutUs';
import Layout from '../Layouts/Layout';
import FAQs from '../Pages/FAQs';
import Trips from '../Pages/Trips';
import PastTrips from '../Pages/PastTrips';
import ContactUs from '../Pages/ContactUs';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import Terms from '../Pages/Terms';
const AppRouter = () => {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/trips" element={<Trips />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/past-trips" element={<PastTrips />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path = "/termsandconditions" element={<Terms />} />
          <Route path="/contact-poshretreats" element={<ContactUs />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
