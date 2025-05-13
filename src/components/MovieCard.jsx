const MovieCard = ({ image, rating, title }) => {
  return (
    <div className="w-[230px] h-[440px]">
      <img
        src={image}
        alt="movie images"
        className="w-full h-[340px] object-fit rounded-t-md"
      />
      <div className=" flex flex-col p-2 bg-[#F4F4F5] rounded-b-md h-[100px]">
        <div className="flex gap-0.5">
          <img src="star.svg" alt="star icon" className="w-4 h-4" />
          <p className="text-sm text-[#09090B] font-normal ">
            {rating}
            <span className=" text-[#71717A]">/10</span>
          </p>
        </div>
        <p className="text-[#09090B] text-lg font-normal  ">{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
