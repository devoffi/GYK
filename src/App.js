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

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/" element={<Home />} />
      <Route path="/why" element={<Why />} />
      <Route path="/features" element={<Feature />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/downloads" element={<Downloads />} />

      <Route path="/product-tips" element={<ProductTips />} />
      <Route path="/safety-guide" element={<SafetyGuide />} />
      <Route path="/parenting-tip" element={<ParentingTip />} />
      <Route path="/family-stories" element={<FamilyStories />} />

      <Route path="/help" element={<Help />} />
      <Route path="/care" element={<Care />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Price />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
