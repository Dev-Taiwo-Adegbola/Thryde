import { WhoWeAreUnit } from "./whoWeAre";
import { GPS, MissionIcon, Rating, SaftySupport, ShareTrip, SOS, ValueIcon, Verified, VisionIcon } from "./AllIcons";

const Safety_Section = () => {
  return (
    <section
      id="Safety_Section"
      className="max-md:p-8 md:p-20 flex flex-col gap-10 items-center "
    >
      <div className="text-center w-[50%] max-lg:w-full">
        <h2 className="font-jerome text-4xl mb-3 text-[#15d46d] ">
          Thyde Safety
        </h2>

        <p>
          At Thryde, safety is at the core of every trip. Every driver is fully
          verified, rides are GPS-tracked, and in-app tools provide emergency
          support when needed. Your comfort and security come first—every ride,
          every time. Safety features page may include:
        </p>
      </div>
      <div className="lg:flex max-lg:flex-col  items-center justify-center   max-md:justify-center ">
        <div className="grid grid-cols-3  max-md:grid-cols-1 max-lg:place-items-center gap-5 max-lg:pt-10 w-[70%] max-lg:w-full">
          <WhoWeAreUnit
            icon={<Verified style="w-[40px] fill-[#15d46d]" />}
            title="Verified drivers"
            description="All drivers undergo thorough background checks and vehicle inspections to ensure your safety."
          />
          <WhoWeAreUnit
            icon={<SOS style="w-[40px] fill-[#15d46d]" />}
            title="SOS emergency button"
            description="In case of an emergency, our SOS button connects you to local authorities and emergency services."
          />
          <WhoWeAreUnit
            icon={<GPS style="w-[40px] fill-[#15d46d]" />}
            title="Real-time GPS trip tracking"
            description="Stay informed about your ride's location and progress with real-time GPS tracking."
          />

          <WhoWeAreUnit
            icon={<ShareTrip style="w-[40px] fill-[#15d46d]" />}
            title="Share-trip feature"
            description="Easily share your trip details with friends and family for added security."
          />

          <WhoWeAreUnit
            icon={<SaftySupport style="w-[40px] fill-[#15d46d]" />}
            title="24/7 safety support"
            description="Our dedicated safety team is available around the clock to assist you with any concerns."
          />

          <WhoWeAreUnit
            icon={<Rating style="w-[40px] fill-[#15d46d]" />}
            title="Rider/driver ratings"
            description="Both riders and drivers can rate each other, ensuring a high standard of service and accountability."
          />
        </div>
      </div>
    </section>
  );
};
export default Safety_Section;
