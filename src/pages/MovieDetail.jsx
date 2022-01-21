//router
import { useParams } from "react-router-dom";
//query
import { useQuery } from "react-query";
import { fetchMovie, img_500, img_300 } from "../api";
//css
import { Container, MarginVertical, Grid } from "../styles/baseStyles";

const MovieDetail = () => {
  const { movieId } = useParams();
  const { isError, isLoading, error, data, isFetched, isFetching, ...query } =
    useQuery(
      ["movie", movieId],
      () => fetchMovie(movieId),
      {
        select: (data) => data.data,
      },
      { retry: false }
    );

  console.log(data);
  return (
    <Container>
      <MarginVertical>
        <Grid col={2}>
          <img src={`${img_500}${data?.poster_path}`} alt="" />
          <div>
            <h1>{data?.title}</h1>
            <div>
              Türler:
              {data?.genres.map((genre) => (
                <span key={genre.id}>{genre.name}, </span>
              ))}
              <span>& {data?.release_date}</span>
            </div>
            <div>
              <p>{data?.tagline}</p>
              <p>{data?.overview}</p>
            </div>
            <div>
              <ul>
                {data?.production_companies.map((crew) => (
                  <li key={crew.id}>
                    <img src={`${img_300}${crew?.logo_path}`} alt="" />
                    <span>{crew.name}</span>
                    <span>{crew.origin_country}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Grid>
      </MarginVertical>
    </Container>
  );
};

export default MovieDetail;
