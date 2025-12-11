import howWeWork from "../assets/img/hwwpng.png";
import HeroImg2 from "../assets/img/heroImg2-removebg-preview.png";
const RideOptions = () => {
  return (
    <section id="ride-options" className="relative overflow-hidden flex flex-col gap-y-15 justify-center max-md:px-8   px-20  items-center py-8">
      <div className="text-center text-[#1a1a1a] w-[50%] max-lg:w-full">
        <h2 className="text-4xl text-[#15d46d] mb-5 font-jerome">
          Our Ride Options
        </h2>
        <p className="">
          {" "}
          Thryde delivers convenience, transparency, and comfort every step of
          the way. Download the app and move on your terms.
        </p>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-5 place-items-center">
        <div className="size-full md:max-lg:w-[80%]  ">
          <p className="flex flex-col gap-y-6 items-end text-right ">
            <span className="bg-[#15d46d]/15 text-[#15d46d] text-2xl font-semibold size-15 flex items-center justify-center  rounded-full">
              1
            </span>
            <span className=" font-semibold text-[#15d46d]">
              Thryde Comfort
            </span>
            <span className="">
              Affordable rides for everyday movement — perfect for students and
              city commuters.
            </span>
          </p>
        </div>
        <div className="size-full  lg:row-span-2 lg:col-span-2 max-lg:order-first h-full w-full place-content-center">
          <span className=" relative flex md:max-lg:justify-center  ">
            <img
              src={HeroImg2}
              alt=""
              className="relative md:max-lg:-translate-x-20 lg:min-w-[350px] max-lg:w-[250px] z-34"
            />
            <img
              src={HeroImg2}
              alt=""
              className="absolute top-8 md:max-lg:left-85 left-70 max-lg:left-50 rotate-25 lg:min-w-[300px] max-lg:w-[200px] hue-rotate-60"
            />
            <span className="block absolute rounded-full size-[500px] max-lg:size-[350px] bg-[#15d46d] top-[50%] left-[50%] -translate-[50%] -z-1"></span>
            <span className="block absolute rounded-full size-[350px] max-lg:size-[350px] bg-[#15d46d] top-[50%] left-[50%] -translate-[50%] -z-1 animate-ping"></span>
          </span>
        </div>
        <div className="size-full md:max-lg:w-[80%] ">
          <p className="flex flex-col gap-y-6 items-start  text-left ">
            <span className=" bg-[#15d46d] text-white text-2xl font-semibold size-15 flex items-center justify-center  rounded-full">
              2
            </span>
            <span className=" font-semibold text-[#15d46d]">
              Thryde Classic
            </span>
            <span className="">
              Classic Comfort rides with top-rated drivers and quality vehicles.
            </span>
          </p>
        </div>
        <div className="size-full md:max-lg:w-[80%] ">
          <p className="flex flex-col gap-y-6 items-end text-right ">
            <span className="bg-[#15d46d]/15 text-[#15d46d] text-2xl font-semibold size-15 flex items-center justify-center  rounded-full">
              3
            </span>
            <span className=" font-semibold text-[#15d46d]">
              Thryde Luxury (SUVs & Premium Cars)
            </span>
            <span className="">
              Spacious, premium rides for business trips, airport runs, and VIP
              transfers.
            </span>
          </p>
        </div>
        <div className="size-full md:max-lg:w-[80%] ">
          <p className="flex flex-col gap-y-6 items-start text-left ">
            <span className="bg-[#15d46d]/15 text-[#15d46d] text-2xl font-semibold size-15 flex items-center justify-center  rounded-full">
              4
            </span>
            <span className=" font-semibold text-[#15d46d]">
              Thryde Deliver
            </span>
            <span className="">
              Fast and reliable delivery for parcels, documents, and small
              business orders.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default RideOptions;
