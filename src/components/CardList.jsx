import MovieCard from "./MovieCard";
import data from "./data";

const CardList = () => {
  return (
    <div className="w-full grid grid-cols-5 grid-rows-2 gap-8">
      {data.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            image={movie.imageUrl}
            title={movie.original_title}
            rating={movie.vote_average}
          />
        );
      })}
    </div>
  );
};

export default CardList;
