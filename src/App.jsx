import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import DownloadThrydeSection from "./components/DownloadThrydeSection";
import Footer from "./components/Footer";
import WhoWeAre from "./components/whoWeAre";
import RideOptions from "./components/RideOptions";
import Safety_Section from "./components/Safety_Section";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";

import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {
        window.location.pathname === '/contact-us' ? null : <Header />
      }
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
