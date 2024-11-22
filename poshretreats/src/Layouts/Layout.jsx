import Navbar from '../Components/Navbar'; 
import Footer from '../Components/PageyComponents/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> 
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
