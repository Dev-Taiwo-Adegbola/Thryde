import { useState } from "react";
import thrydeLogo from "../assets/img/logo_text.png";
import { MenuIcon, XIcons } from "./AllIcons";
const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="fixed inset-x-0 top-0 bg-white z-500  flex justify-between items-center max-md:px-8 md:px-20 py-6 ">
      <img src={thrydeLogo} alt="Thryde Logo" className="w-[130px]" />
      <nav
        className={`max-lg:fixed transition-transform ${
          menuToggle ? " max-lg:translate-x-0" : " max-lg:translate-x-[200%]"
        } max-lg:inset-0 max-lg:backdrop-blur-3xl max-lg:z-999999 max-lg:bg-[#15d46d]/15 max-lg:w-full   lg:block w-[40%]`}
      >
        <ul className="flex max-lg:flex-col max-lg:h-screen lg:justify-between max-lg:justify-center max-lg:gap-10 max-lg:text-2xl items-center">
          <li>
            <a onClick={() => setMenuToggle(false)} href="/">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setMenuToggle(false)} href="#who-we-are">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setMenuToggle(false)} href="#how-thryde-works">
              Services
            </a>
          </li>
          <li>
            <a onClick={() => setMenuToggle(false)} href="#ride-options">
              Ride options
            </a>
          </li>{" "}
          <li>
            <a onClick={() => setMenuToggle(false)} href="/faqs">
              FAQs
            </a>
          </li>{" "}
          <a
            onClick={() => setMenuToggle(false)}
            href="/contact-us"
            className=" lg:hidden rounded-3xl bg-[#15d46d] px-7 py-3 text-white"
          >
            Contact Us
          </a>
        </ul>
      </nav>
      <a
        href="/contact-us"
        className="hidden lg:block rounded-3xl bg-[#15d46d] px-7 py-3 text-white"
      >
        Contact Us
      </a>
      <button
        onClick={() => setMenuToggle(!menuToggle)}
        className="relative z-999999 lg:hidden fill-[#1a1a1a]"
      >
        {menuToggle ? (
          <XIcons style="w-[38px]" />
        ) : (
          <MenuIcon style="w-[40px]" />
        )}
      </button>
    </div>
  );
};
export default Header;
