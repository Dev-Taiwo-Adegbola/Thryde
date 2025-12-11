const AppDownloadBtn = ({ platform, icon, link }) => {
  return (
    <a href={link} className="flex justify-between items-center gap-4 bg-[#1a1a1a] p-5 rounded-xl text-white min-w-fit ">
      {icon}
      <span className="flex flex-col items-start">
        <span className="font-semibold">Download For</span>
        <span className="">{platform}</span>
      </span>
    </a>
  );
};
export default AppDownloadBtn;
