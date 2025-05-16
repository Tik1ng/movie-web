import MovieCard from "./MovieCard";
import data from "./data";

const CardList = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
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
