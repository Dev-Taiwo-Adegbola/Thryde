import howWeWork from "../assets/img/hwwpng.png";

const HowWeWork = () => {
  return (
    <section className="relative overflow-hidden flex flex-col gap-y-15 justify-center max-md:px-8   px-20  items-center py-8">
      <div className="text-center text-[#1a1a1a] max-lg:w-full w-[50%]">
        <h2 className="text-4xl  mb-5 font-jerome">
          How Thryde Works
        </h2>
        <p className="">
          {" "}
          Embrace life's vastness, venture forth, and discover the wonders
          waiting beyond. The world beckons; seize its grand offerings now!
        </p>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-5 place-items-center">
        <div className="size-full md:max-lg:w-[80%] ">
          <p className="flex flex-col gap-y-6 items-end text-right ">
            <span className="bg-[#15d46d]/15 text-[#15d46d] text-2xl font-semibold size-15 flex items-center justify-center  rounded-full">
              1
            </span>
            <span className=" font-semibold text-[#1a1a1a]">For Riders</span>
            <span className="">
              Book a ride in seconds, track your driver live, enjoy transparent
              fares, and move comfortably to your destination.{" "}
            </span>
          </p>
        </div>
        <div className="  lg:row-span-2 lg:col-span-2  max-lg:order-first h-full lg:w-full place-content-center">
          <span className=" relative ">
            <img src={howWeWork} alt="" className="relative min-w-[600px] max-lg:min-w-[350px]" />
            <span className="block absolute rounded-full max-lg:size-[350px] size-[450px] bg-[#15d46d] top-[50%] left-[50%] -translate-[50%] -z-1"></span>
            <span className="block absolute rounded-full max-lg:size-[350px] size-[350px] bg-[#15d46d] top-[50%] left-[50%] -translate-[50%] -z-1 animate-ping"></span>
          </span>
        </div>
        <div className="size-full md:max-lg:w-[80%] ">
          <p className="flex flex-col gap-y-6 items-start  text-left ">
            <span className="bg-[#15d46d]/15 text-[#15d46d] text-2xl font-semibold size-15 flex items-center justify-center  rounded-full">
              2
            </span>
            <span className=" font-semibold text-[#1a1a1a]">For Drivers</span>
            <span className="">
              Earn more with flexible hours, transparent commissions, instant
              payouts, and a supportive driver community. Drive on your
              schedule, in any eligible car model.
            </span>
          </p>
        </div>
        <div className="size-full md:max-lg:w-[80%] ">
          <p className="flex flex-col gap-y-6 items-end text-right ">
            <span className="bg-[#15d46d] text-white text-2xl font-semibold size-15 flex items-center justify-center  rounded-full">
              3
            </span>
            <span className=" font-semibold text-[#1a1a1a]">
              For Businesses
            </span>
            <span className="">
              Access corporate transport, staff mobility solutions, delivery
              support and fleet management powered by Thryde technology.
            </span>
          </p>
        </div>
        <div className="size-full md:max-lg:w-[80%] ">
          <p className="flex flex-col gap-y-6 items-start text-left ">
            <span className="bg-[#15d46d]/15 text-[#15d46d] text-2xl font-semibold size-15 flex items-center justify-center  rounded-full">
              4
            </span>
            <span className=" font-semibold text-[#1a1a1a]">
              Thryde For All
            </span>
            <span className="">
              Whether Riders, Drivers, or Businesses, Thryde has come to provide
              the best, tha safest and the smartest of Mobility
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default HowWeWork;
