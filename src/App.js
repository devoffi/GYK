import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Footer from "./components/Footer";
import ForgotPassword from "./Pages/ForgotPassword";
import Why from "./Pages/Why";
import Feature from "./Pages/Features";
import Price from "./Pages/Price";
import ProductTips from "./Pages/ProductTips"
import GetStarted from "./Pages/GetStarted";
import Downloads from "./Pages/Downloads"
import SafetyGuide  from "./Pages/SafetyGuide"
import ParentingTip from "./Pages/ParentingTip"
import FamilyStories from "./Pages/FamilyStories"
import Help from "./Pages/Help"
import Care from "./Pages/Care"
import PartnersLogin from "./Pages/PartnersLogin";
import School from "./Pages/School";
import WebsitePolicy from "./Pages/Website-policy";
import CookiePolicy from "./Pages/Cookie-policy";
import LegalNotic from "./Pages/Legal-notic";
import ProductPolicy from "./Pages/Product-policy";
import Partner from "./Pages/Partner"
import Terms from "./Pages/Terms";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/partners" element={<PartnersLogin />} />
      <Route path="/partners-signup" element={<Partner />} />

      <Route path="/" element={<Home />} />
      <Route path="/why" element={<Why />} />
      <Route path="/features" element={<Feature />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/downloads" element={<Downloads />} />

      <Route path="/product-tips" element={<ProductTips />} />
      <Route path="/safety-guide" element={<SafetyGuide />} />
      <Route path="/parenting-tip" element={<ParentingTip />} />
      <Route path="/family-stories" element={<FamilyStories />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/help" element={<Help />} />
      <Route path="/care" element={<Care />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/school" element={<School />} />
      <Route path="/pricing" element={<Price />} />
      <Route path="/product-privacy" element={<ProductPolicy />} />
      <Route path="/web-privacy" element={<WebsitePolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/legal-notice" element={<LegalNotic />} />
      <Route path="/terms" element={<Terms />} />
      




    </Routes>
    <Footer />
  </>
  );
}

export default App;
