import movingCar from "../assets/img/thrydeCar.png";
import track from "../assets/img/track1.png";
const DownloadThrydeSection = () => {
  return (
    <section className=" max-lg:p-0 p-20 text-white ">
      <div className="flex items-center justify-between max-lg:px-6  max-lg:py-5 py-8 px-20 max-lg:rounded-none rounded-2xl bg-[#532ea8] overflow-hidden bg-[url('././assets/img/track1.png')] bg-no-repeat bg-position-[300px] max-lg:bg-position-[50px]  bg-cover ">
        <div className="flex flex-col items-start justify-center max-lg:gap-3 gap-8 h-[300px] max-lg:h-fit max-md:w-full w-[40%]">
          <h3 className="max-lg:text-2xl text-5xl font-semibold font-jerome">
            Download Thryde
          </h3>
          <p className="max-md:hidden">
            Experience smarter mobility. Download the Thryde app on Android or
            iOS and move with convenience, safety, and comfort.
          </p>
          <p className=" hidden max-md:block">
            Download the Thryde app and move with convenience.
          </p>
          <button className="py-3 px-5 bg-[#1a1a1a] rounded">
            Get Started
          </button>
        </div>
        <div className="flex relative lg:justify-between mr-15  w-[45%]">
          <img
            src={movingCar}
            alt=""
            className="relative z-2 -translate-y-100 animate-move  max-lg:w-[100px] w-[250px]"
          />

          <img
            src={movingCar}
            alt=""
            className="relative z-2 -translate-y-100 animate-move2 max-lg:w-[100px] w-[250px]"
          />
        </div>
      </div>
    </section>
  );
};
export default DownloadThrydeSection;
