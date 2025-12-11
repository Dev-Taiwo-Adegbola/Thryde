import BecomeADriver from "../components/BecomeADriver";
import DownloadThrydeSection from "../components/DownloadThrydeSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import RideOptions from "../components/RideOptions";
import Safety_Section from "../components/Safety_Section";
import WhoWeAre from "../components/whoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <HowWeWork />
      <DownloadThrydeSection />
      <RideOptions />
      <BecomeADriver />
      <Safety_Section />

      <Footer />
    </>
  );
};
export default Home;
