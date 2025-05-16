const Separation = ({ text }) => {
  return (
    <div className="w-full mb-2">
      <div className="flex justify-between text-[#09090B] pb-2">
        <p className="text-xl md:text-2xl font-semibold leading-8">{text}</p>
        <div className="flex py-2 px-4 gap-2 items-center cursor-pointer hover:text-indigo-700">
          <p className="text-sm font-medium leading-5">See more</p>
          <img src="arrow-right.svg" alt="arrow icon" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Separation;
