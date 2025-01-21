import Navbar from "../Components/Navbar";
import Footer from "../Components/PageyComponents/Footer";
import ScrollToTop from "../Components/ScrolltoTop";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
