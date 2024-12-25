// src/Routes/router.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/Homepage'; 
import Layout from '../Layouts/Layout';
import ContactUs from '../Pages/ContactUs';
const AppRouter = () => {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/contact-poshretreats" element={<ContactUs />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
