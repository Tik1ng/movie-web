const Hero = () => {
  return (
    <div
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center my-4 md:my-7"
      style={{ backgroundImage: "url('Feature.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 max-w-sm text-white pt-16 sm:pt-24 md:pt-32 lg:pt-48">
          <div>
            <p className="text-base font-normal leading-6">Now Playing:</p>
            <p className="text-3xl md:text-4xl font-bold leading-10">Wicked</p>
            <div className="flex items-center">
              <img src="star.svg" alt="star icon" className="mr-1" />
              <p className="text-lg font-semibold leading-7">
                6.9 <span className="text-[#71717A]">/10</span>
              </p>
            </div>
          </div>
          <p className="text-xs md:text-sm font-normal leading-normal max-w-xs md:max-w-sm">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
          <div className="inline-flex w-40 px-4 py-2 gap-2 bg-white rounded-md items-center">
            <img src="play.svg" alt="play icon" />
            <p className="text-sm font-medium text-[#18181B]">Watch Trailer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
