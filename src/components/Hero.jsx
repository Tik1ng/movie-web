const Hero = () => {
  return (
    <div
      className="w-[1440px] h-[600px] bg-cover bg-center my-7 "
      style={{ backgroundImage: "url('Feature.png')" }}
    >
      <div className="flex flex-col gap-3 w-[404px] text-white pl-44 pt-48">
        <div>
          <p className="text-base font-normal leading-6">Now Playing:</p>
          <p className="text-4xl font-bold leading-10">Wicked</p>
          <div className="flex">
            <img src="star.svg" alt="stat icon" />
            <p className="text-lg font-semibold leading-7">
              6.9 <span className=" text-[#71717A]">/10</span>
            </p>
          </div>
        </div>
        <p className="w-[302px] text-xs font-normal leading-4w">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.{" "}
        </p>
        <div className="w-[145px] flex px-4 py-2 gap-2 bg-white rounded-md">
          <img src="play.svg" alt="play icon" />
          <p className="text-sm font-medium  text-[#18181B]">Watch Trailer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
