const Upcoming = () => {
  return (
    <div>
      <div className="flex justify-between text-[#09090B] w-[1277px] pb-8 ">
        <p className="text-2xl font-semibold leading-8">Upcoming </p>
        <div className="flex py-2 px-4 gap-2 items-center">
          <p className="text-sm font-medium leading-5">See more</p>
          <img
            src="arrow-right.svg"
            alt="arrow icon"
            className="w-[16px] h-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
