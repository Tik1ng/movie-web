const Upcoming = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-between text-[#09090B] pb-4 md:pb-8">
        <p className="text-xl md:text-2xl font-semibold leading-8">Upcoming</p>
        <div className="flex py-2 px-4 gap-2 items-center">
          <p className="text-sm font-medium leading-5">See more</p>
          <img src="arrow-right.svg" alt="arrow icon" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
