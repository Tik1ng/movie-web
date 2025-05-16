import useSWR from "swr";
import MovieCard from "./MovieCard";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Top = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    (url) => fetcher(url, { headers: { Authorization: `Bearer ${token}` } })
  );

  if (error) {
    return <div>aldaa</div>;
  }

  if (isLoading) {
    return <div>unshjin</div>;
  }
  console.log(data);
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
      {data.results.slice(0, 10).map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.original_title}
            rating={movie.vote_average}
          />
        );
      })}
    </div>
  );
};

export default Top;
