import thrydeRide from "../assets/img/thrydeRide.jpg";
import { MissionIcon, ValueIcon, VisionIcon } from "./AllIcons";
const WhoWeAre = () => {
  return (
    <section className="max-md:p-8 md:p-20 flex flex-col gap-10 items-center ">
      <div className="text-center w-[50%] max-lg:w-full">
        <h2 className="font-jerome text-4xl mb-3">Who we Are?</h2>
        <p>
          Thryde is a next-generation ride-hailing platform built to simplify
          mobility for riders and empower drivers with better earning
          opportunities. We combine technology, safety, and customer-first
          service to create a seamless transport experience.
        </p>
      </div>
      <div className="lg:flex max-lg:flex-col items-center justify-between max-md:justify-center ">
        <img src={thrydeRide} alt="" className="w-[45%] max-lg:w-full rounded-2xl shadow-2xl shadow-[#15d46d]/15" />
        <div className="grid grid-cols-2  max-md:grid-cols-1 max-lg:place-items-center gap-5 max-lg:pt-10 w-[50%] max-lg:w-full">
          <WhoWeAreUnit
            icon={<MissionIcon style="w-[40px] fill-[#15d46d]" />}
            title="Our Mission"
            description="To make city mobility safe, accessible, affordable, and rewarding for everyone."
          />
          <WhoWeAreUnit
            icon={<VisionIcon style="w-[40px] fill-[#15d46d]" />}
            title="Our Visions"
            description="To become the most trusted mobility partner across Africa, connecting people, businesses, and opportunities."
          />
          <WhoWeAreUnit
            icon={<ValueIcon style="w-[40px] fill-[#15d46d]" />}
            title="Our Values"
            description="Safety. Convenience. Transparency. Innovation. Community."
          />
        </div>
      </div>
    </section>
  );
};
export default WhoWeAre;

export const WhoWeAreUnit = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 w-[80%]">
      <span className="rounded-xl bg-[#15d46d]/20 animate-pulse w-[60px] p-3 flex items-center justify-center ">
        {icon}
      </span>
      <p className="font-bold">{title}</p>
      <p className="">{description}</p>
    </div>
  );
};
