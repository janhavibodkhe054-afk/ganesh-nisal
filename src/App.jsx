
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import OrganicFarming from "./pages/OrganicFarming";
import Dairy from "./pages/Dairy";
import Contact from "./pages/Contact";
import Spiritual from "./pages/Spiritual";

function App() {
  return (
    <>
      {/* Scroll To Top on Page Change */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Fixed Language Switcher - All Pages */}
      <LanguageSwitcher />

      {/* PAGE CONTENT */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/organic-farming" element={<OrganicFarming />} />
          <Route path="/dairy-business" element={<Dairy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/spiritual-social-work" element={<Spiritual />} />
          {/* Add Other Page Routes Here */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
