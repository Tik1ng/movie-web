import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SWR = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    (url) => fetcher(url, { headers: { Authorization: `Bearer ${token}` } })
  );

  if (error) {
    return <div>aldaa</div>;
  }

  if (isLoading) {
    return <div>unshjin</div>;
  }

  return (
    <div className="flex gap-2">
      {data.results.map((movie) => {
        return (
          <p className="font-medium text-xl text-blue-800 border rounded-md">
            {movie.title}
          </p>
        );
      })}
    </div>
  );
};
export default SWR;
