import Home from "@/pages/Home";
import Category from "@/pages/category/Category";
import Navbar from "@/components/Navbar";
import Packages from "@/pages/packages/Package";
import Culture from "@/pages/Culture";
import Destination from "@/pages/Destination";
import Activities from "@/pages/activities/Activities";
import C_Click from "./pages/category/C_Click";
import { useLocation } from "react-router-dom";
import Story from "@/pages/Story";
import Terms from "@/pages/Terms";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import P_Click from "./pages/packages/P_Click";
import A_Click from "./pages/activities/A_Click";
import D_Click from "./pages/D_Click";
import Error404 from "./pages/Error404";
import Privacy from "./pages/privacy policies/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
import ReviewPopup from "./components/user-profile/ReviewPopup";

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
            <Route path="/category" element={<Category />} />
            <Route path="/cateclick/:id" element={<C_Click />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packclick/:id" element={<P_Click />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/desticlick/:id" element={<D_Click />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/actclick/:id" element={<A_Click />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/error" element={<Error404 />} />
            <Route path="/story" element={<Story />} />
            <Route path="/terms&condition" element={<Terms />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/review/:id" element={<ReviewPopup />} />
          </Routes>
        </div>
      </div>{" "}
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

export default App;