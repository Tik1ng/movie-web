const MovieCard = ({ image, rating, title }) => {
  return (
    <div className="w-full h-auto flex flex-col">
      <img
        src={image}
        alt={`${title} poster`}
        className="w-full aspect-[2/3] object-cover rounded-t-md"
      />
      <div className="flex flex-col p-2 bg-[#F4F4F5] rounded-b-md">
        <div className="flex gap-0.5 items-center">
          <img src="star.svg" alt="star icon" className="w-4 h-4" />
          <p className="text-sm text-[#09090B] font-normal">
            {rating}
            <span className="text-[#71717A]">/10</span>
          </p>
        </div>
        <p className="text-[#09090B] text-base sm:text-lg font-normal h-[50px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
