import footerImg from "../assets/img/footerImg.png";
import thrydeLogo from "../assets/img/thrydeLogo-nobg.png";
import { FaceBookIcon, InstaIcon, Whatsapp } from "./AllIcons";
const Footer = () => {
  return (
    <footer className="">
      <div className="relative overflow-hidden flex items-center justify-between  w-full max-lg:h-[300px]  h-[500px] max-lg:bg-[url('././assets/img/footerImg.png')] bg-no-repeat md:max-lg:bg-position-[420px]  bg-position-[190px] max-lg:pl-8 pl-20 ">
        <div className="w-[40%] max-md:w-[60%] flex flex-col gap-4">
          <h3 className="max-lg:text-4xl text-6xl text-[#15d46d]  font-jerome max-lg:mb-2  mb-5 ">
            Register and order your ride
          </h3>
          <p className=" ">
            Thyrde is Fast, safe, reliable, seamless and convenient. My go-to
            ride-hailing app!
          </p>
        </div>
        <img
          src={footerImg}
          alt=""
          className="max-lg:hidden right-0 max-lg:w-[40%] w-[50%]  h-full"
        />

        <span className="size-[800px] bg-linear-to-r from-[#15d46d]  via-[#1a1a1a]  rounded-full absolute -translate-x-55 -translate-y-35 blur-3xl -z-1 animate-pulse opacity-40"></span>
      </div>
      <div className="bg-[#1a1a1a] text-white w-full flex justify-between gap-10 p-20 max-md:p-8 flex-wrap">
        <div className="flex flex-col gap-5  w-[300px]">
          <div className="flex items-center gap-4 ">
            <img src={thrydeLogo} alt="" className="w-[45px]" />
            <h3 className="text-3xl font-semibold text-[#15d46d] ">Thryde</h3>
          </div>
          <p className="">
            <span className="font-semibold">Head Office: </span>
            205, Oyemekun Road, Akure, Ondo State
          </p>

          <p className="">
            <span className="font-semibold">Branch Office:</span> 2nd Floor,
            131,Ademulegun road, Former NEPA Office, Ondo city, Ondo State
          </p>
          <p className="">
            <span className="font-semibold">Phone:</span> 08070772145
          </p>

          <p className="">
            <span className="font-semibold">Email:</span> smartthryde@gmail.com
          </p>
          <span className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61584280952264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaceBookIcon />
            </a>
            <a
              href="https://www.instagram.com/smartthryde/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaIcon />
            </a>
            <a
              href="https://wa.me/+2348070772145"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp style="w-6 h-6 fill-[#15d46d]" />
            </a>
          </span>
        </div>
        <div className=" w-[300px]">
          <h2 className="text-2xl mb-5 font-semibold ">Company info</h2>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="#who-we-are">About Us</a>
            </li>
            <li>
              <a href="#/faqs">FAQs</a>
            </li>
            <li>
              <a href="#becoming-a-driver">We are hiring</a>
            </li>
            <li>
              <a href="#Safety_Section">Thryde Safety</a>
            </li>
          </ul>
        </div>
        <div className=" w-[300px]">
          <h2 className="text-2xl mb-5 font-semibold ">Service</h2>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="#how-thryde-works">For riders</a>
            </li>
            <li>
              <a href="#how-thryde-works">For drivers</a>
            </li>
            <li>
              <a href="#how-thryde-works">For business</a>
            </li>
          </ul>
        </div>

        <div className=" w-[300px]">
          <h2 className="text-2xl mb-5 font-semibold ">Quick Links</h2>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.thryde.driver">
                Download Driver App
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.thryde.user  ">
                Download Rider App
              </a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="https://wa.me/+2348070772145">Whatsapp</a>
            </li>
          </ul>
        </div>
        <div className=""></div>
      </div>
      <div className="w-full bg-[#522ea8] p-2">
        <p className="text-center text-white">
          Thryde &copy; {new Date().getFullYear()} Right Reserved{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
