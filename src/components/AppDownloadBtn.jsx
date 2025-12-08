const AppDownloadBtn = ({ platform, icon }) => {
  return (
    <button className="flex justify-between items-center gap-4 bg-[#1a1a1a] p-5 rounded-xl text-white ">
      {icon}
      <span className="flex flex-col items-start">
        <span className="font-semibold">Download on the</span>
        <span className="">{platform}</span>
      </span>
    </button>
  );
};
export default AppDownloadBtn;
