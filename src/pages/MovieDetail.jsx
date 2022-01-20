import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchMovie } from "../api";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { isError, isLoading, error, data, isFetched, isFetching, ...query } =
    useQuery(["movie", movieId], () => fetchMovie(movieId), {
      select: (data) => data.data,
    });

  console.log(data);
  return <>MovieDetail</>;
};

export default MovieDetail;
