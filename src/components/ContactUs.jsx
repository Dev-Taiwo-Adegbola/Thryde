import { useState } from "react";
import footerImg from "../assets/img/footerImg.png";
import thrydeLogo from "../assets/img/thrydeLogo-nobg.png";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="contactUs" className=" flex items-center max-lg:flex-col  ">
      <div className="overflow-hidden flex flex-col justify-between w-[50%] max-lg:w-full bg-[#15d46d] max-lg:pl-10 max-lg:pt-10 pl-20 pt-20 lg:h-screen md:h-[80vh] sm:h-[90vh]  text-white ">
        <div className=" pr-5">
          <div className="flex items-center justify-between mb-8  ">
            <div className="flex items-center gap-4 ">
              <img src={thrydeLogo} alt="" className="w-[45px] mt-auto" />
              <h1 className="text-3xl font-semibold font-jerome tracking-wide text-[#532ea8]">
                Thryde
              </h1>
            </div>
            <a
              href="/"
              className="font-semibold hover:text-[#532ea8] text-white p-3 rounded-2xl"
            >
              <span className="text-3xl">&larr;</span> Go back
            </a>
          </div>
          <h1 className="text-4xl font-semibold">Talk to our team</h1>
          <p className="mt-5 text-lg">
            We’re here to assist you. Reach out for support, partnerships,
            business inquiries, or feedback.
          </p>
          <p className="mt-5">
            <span className="font-semibold text-[#532ea8]">Head Office: </span>
            205, Oyemekun Road, Akure, Ondo State
          </p>

          <p className="">
            <span className="font-semibold text-[#532ea8]">Branch Office:</span>{" "}
            2nd Floor, 131,Ademulegun road, Former NEPA Office, Ondo city, Ondo
            State
          </p>
          <p className="">
            <span className="font-semibold text-[#532ea8]">Phone:</span>{" "}
            08070772145
          </p>

          <p className="">
            <span className="font-semibold text-[#532ea8]">Email:</span>{" "}
            smartthryde@gmail.com
          </p>
        </div>
        <img src={footerImg} alt="" className="" />
      </div>
      <form
        className="  flex flex-col gap-4 h-screen max-lg:w-full w-[50%] max-lg:p-10 p-20 pb-0 text-lg"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <h2 className="text-2xl text-[#15d46d] underline  mb-10">
          {" "}
          Send us a message
        </h2>
        <input
          type="hidden"
          name="access_key"
          value="fd03389d-1188-4ca9-ad4e-32ead58670db"
        ></input>
        <input type="hidden" name="redirect" value="false"></input>
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          type="text"
          id="name"
          name="name"
          required
          className=" peer/one border-b-2 border-[#15d46d] outline-0  p-2"
        />
        <label
          htmlFor="name"
          className={` transition-all peer-focus:text-[#15d46d] peer-focus/one:-top-20  peer-focus/one:text-[#15d46d] relative -top-12 left-2 ${
            fullName ? "-top-20 text-[#15d46d]" : ""
          }`}
        >
          Your Name
        </label>

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
          name="email"
          required
          className="peer/two border-b-2 border-[#15d46d] outline-0  p-2 "
        />
        <label
          htmlFor="email"
          className={` transition-all  peer-focus/two:-top-20 peer-focus/two:text-[#15d46d] relative -top-12 left-2 ${
            email ? "-top-20 text-[#15d46d]" : ""
          }`}
        >
          Your Email
        </label>

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          id="message"
          name="message"
          required
          className="peer/three resize-none border-b-2 border-[#15d46d] outline-0  p-2 min-h-[200px]  "
        ></textarea>
        <label
          htmlFor="message"
          className={`three transition-all peer-focus:text-[#15d46d] peer-focus/three:-top-[235px] peer-focus/three:text-[#15d46d] relative -top-[210px] left-2 ${
            message ? "-top-[235px] text-[#15d46d]" : ""
          }`}
        >
          Your Message
        </label>
        {/* <p className="my-8 text-[#15d46d]/80">Kindly fill all fields with valid information, as all information provided will be required by our Team for proper Response</p> */}
        <button type="submit" className="bg-[#15d46d] h-18 text-white p-2">
          Send
        </button>
      </form>
    </div>
  );
};
export default ContactUs;
