import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Signup from "@/pages/Signup";
import Signin from "@/pages/Signin.tsx";
import "./index.css";
import ChangePW from "./components/fogot password/ChangePW.tsx";
import Otp from "./components/fogot password/Otp.tsx";
// import Error404 from "./pages/Error404.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin/change-password" element={<ChangePW />} />

        <Route path="/signin/verifyotp" element={<Otp />} />
        {/* <Route path="/error" element={<Error404 />} /> */}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
