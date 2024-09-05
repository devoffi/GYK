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

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
