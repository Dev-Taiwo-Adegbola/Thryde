import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import DownloadThrydeSection from "./components/DownloadThrydeSection";
import Footer from "./components/Footer";
import WhoWeAre from "./components/whoWeAre";
import RideOptions from "./components/RideOptions";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhoWeAre />
      <HowWeWork />
      <DownloadThrydeSection />
      <RideOptions />
      <Footer />
    </>
  );
}

export default App;
