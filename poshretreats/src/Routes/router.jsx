// src/Routes/router.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/Homepage'; 
import Layout from '../Layouts/Layout';

const AppRouter = () => {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
