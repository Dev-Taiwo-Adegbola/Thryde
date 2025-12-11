const BecomeADriver = () => {
  return (
    <div id="becoming-a-driver" className="max-lg:p-0 p-20 text-white ">
      <div className="flex items-center justify-between max-lg:px-6  max-lg:py-5 py-8 px-20 max-lg:rounded-none rounded-2xl bg-[#532ea8] overflow-hidden bg-[url('././assets/img/track1.png')] bg-no-repeat bg-position-[300px] max-lg:bg-position-[50px]  bg-cover ">
        <div className="flex flex-col items-start justify-center max-lg:gap-3 gap-8 h-[300px] max-lg:h-fit max-md:w-full w-[40%]">
          <h3 className="max-lg:text-2xl text-5xl  font-jerome">
            Become A Driver
          </h3>
          <p className="max-md:hidden">
            Earn on your terms. Join thousands of drivers using Thryde to
            increase their income with flexible hours, low commissions, instant
            payouts, and 24/7 support.
          </p>
          <p className=" hidden max-md:block">
            Join thousands of drivers using Thryde to manke Money.
          </p>
          <span className="font-semibold">Download:</span>
          <span className="flex gap-4 max-md:gap-2 max-md:flex-wrap">
            {/* <a
              href="https://play.google.com/store/apps/details?id=com.thryde.user"
              className="py-3 px-5 bg-[#1a1a1a] rounded"
            >
              For Users
            </a> */}
            <a
              href="https://play.google.com/store/apps/details?id=com.thryde.driver"
              className="py-3 px-5 bg-[#1a1a1a] rounded"
            >
              For Drivers
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default BecomeADriver;
