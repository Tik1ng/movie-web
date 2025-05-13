const Navigation = () => {
  return (
    <div className="flex justify-center items-center  w-[1440px] h-[59px]">
      <div className="flex justify-between items-center max-w-[1280px] w-full h-[36px] px-4 ">
        <div className="flex gap-2">
          <img src="./film.svg" alt="film icon" />
          <p className="text-indigo-700 text-base font-bold leading-5">
            Movie Z
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex py-2 px-4 gap-2 border-1 border-[#E4E4E7] rounded-md">
            <img src="chevron-down.svg" alt="down icon" />
            <p className="text-[#18181B] text-sm font-medium leading-5">
              Genre
            </p>
          </div>
          <div className="w-[379xp] flex items-center px-3 gap-2.5 border-1 border-[#E4E4E7] rounded-md">
            <img
              src="_magnifying-glass.svg"
              alt="search icon"
              className="w-[16px] h-[16px]"
            />
            <input
              type="text"
              placeholder="Search.."
              className="text-sm font-normal leading-5"
            />
          </div>
        </div>
        <div className="w-[36px] h-[36px] flex items-center justify-center border boder-[#E4E4E7]  rounded-[10px]">
          <img src="moon.svg" alt="moon icon" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
