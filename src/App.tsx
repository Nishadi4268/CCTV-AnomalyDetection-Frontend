import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";
import Story from "@/pages/Story";
import Terms from "@/pages/Terms";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Error404 from "./pages/Error404";
import Privacy from "./pages/privacy policies/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";
import Product from "./pages/Product";
// import ReviewPopup from "./components/user-profile/ReviewPopup";

function App() {
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const hideNavbarAndFooter = location.pathname === "/error";

  return (
    <div>
       {/* {loading && <PageLoader />} */}
      <div
        className={`${
          hideNavbarAndFooter ? "" : "px-[15px] lg:px-[30px] xl:px-[100px]"
        } flex flex-col `}
      >
        {!hideNavbarAndFooter && <Navbar />}
        <ScrollToTop />
        <div className="flex-grow pt-[16px] md:pt-[40px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/product" element={<Product />} />
            <Route path="/error" element={<Error404 />} />
            <Route path="/story" element={<Story />} />
            <Route path="/terms&condition" element={<Terms />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/editprofile" element={<EditProfile/>} />
          </Routes>
        </div>
      </div>{" "}
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;