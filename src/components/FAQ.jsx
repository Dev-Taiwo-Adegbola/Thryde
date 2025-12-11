import { useState } from "react";
import { Eye, EyeClosed } from "./AllIcons";
import { driverFAQ, CustomerFAQ } from "./faq";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  return (
    <div id="FAQ" className="lg:p-20 p-10 mt-15 text-[#1a1a1a]">
      <h2 className="text-4xl font-semibold text-[#15d46d] mb-10">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="">
        <h3 className="text-2xl font-semibold text-[#15d46d] mb-5">
          THRYDE FAQ - DRIVER
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          {driverFAQ.map((e, i) => {
            return (
              <FAQquestions
                number={i}
                question={e.Question}
                answer={e.Answer}
                setOpenFAQ={setOpenFAQ}
                openFAQ={openFAQ}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-15">
        <h3 className="text-2xl font-semibold text-[#15d46d] mb-5">
          THRYDE – Customer Signup FAQs
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 ">
          {CustomerFAQ.map((e, i) => {
            return (
              <FAQquestions
                number={i}
                question={e.Question}
                answer={e.Answer}
                setOpenFAQ={setOpenFAQ}
                openFAQ={openFAQ}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FAQ;

export const FAQquestions = ({
  question,
  answer,
  number,
  openFAQ,
  setOpenFAQ,
}) => {
  return (
    <div
      className={`overflow-hidden relative  transition-all w-full  bg-[#15d46d]/50 rounded-2x py-3 ${
        openFAQ === number ? " min-h-[250px]" : " h-[250px]"
      }`}
    >
      <span
        className={`absolute inset-0 bg-[#15d46d] rounded-2xl text-center flex flex-col gap-2 items-center justify-center text-2xl font-semibold px-8 ${
          openFAQ === number ? "opacity-0" : "opacity-100"
        }`}
      >
        {number + 1}. {question}
        {/* <button onClick={() => setOpenFAQ(!openFAQ)}>Show</button> */}
      </span>
      <div className="flex px-5 justify-between">
        <p className="font-semibold mb-5 ">
          {number + 1}. {question}
        </p>
        <button className="relative z-10" onClick={() => setOpenFAQ(number)}>
          {openFAQ === number ? (
            <EyeClosed style={`w-[30px] transition-all fill-[#1a1a1a]`} />
          ) : (
            <Eye style={`w-[30px] transition-all fill-[#1a1a1a]`} />
          )}
        </button>
      </div>
      <p className="px-5">{answer}</p>
    </div>
  );
};
