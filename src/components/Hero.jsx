import { AppStore, GooglePlay } from "./AllIcons";
import AppDownloadBtn from "./AppDownloadBtn";
import HeroImg from "../assets/img/buying-a-black-car-removebg-preview.png";
import HeroImg2 from "../assets/img/heroImg2-removebg-preview.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden max-md:px-5 md:px-20 flex max-lg:flex-col items-center bg-[url('././assets/img/Hero.png')] bg-cover bg-no-repeat w-full max-md:py-15 py-25 max-lg:gap-10">
      <div className="flex flex-col gap-10 max-lg:w-full  max-lg:items-center w-[40%] max-lg:text-center">
        <h1 className="*mobile-hero text-6xl  lg:text-[#1a1a1a] leading-15 font-jerome">
          Your Smooth Ride, Just a Tap Away
        </h1>
        <p className="text-[#1a1a1a]">
          Welcome to Thryde — the smarter, safer, and more flexible way to move
          around your city. Thryde delivers convenience, transparency, and
          comfort every step of the way.
        </p>
        <span className="flex max-md:flex-col gap-5">
          <AppDownloadBtn platform={"Google Play"} icon={<GooglePlay />} />
          <AppDownloadBtn platform={"App Store"} icon={<AppStore />} />
          <button></button>
        </span>
      </div>
      <div className="lg:w-[60%]">
        <img src={HeroImg} alt="" className="w-[1000px] translate-x-[32%]" />
        <img
          src={HeroImg2}
          alt=""
          className="absolute max-lg:hidden top-30 w-[280px] max-lg:w-[230px] -z-1 translate-x-[55%]  "
        />
      </div>
    </section>
  );
};
export default Hero;
