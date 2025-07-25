import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Signup from "@/pages/Signup";
import Signin from "@/pages/Signin.tsx";
import Forgetpw from "@/pages/Forgetpw.tsx";
import "./index.css";
// import Error404 from "./pages/Error404.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Forgetpw" element={<Forgetpw />} />
        {/* <Route path="/error" element={<Error404 />} /> */}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
