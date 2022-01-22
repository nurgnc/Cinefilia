// router
import { useParams } from 'react-router-dom';
// query
import { useQuery } from 'react-query';
import { fetchMovie, img500 } from '../api';
// css
import { Container, MarginVertical, Grid } from '../styles/baseStyles';

function MovieDetail() {
  const { movieId } = useParams();
  const {
    isError, isLoading, error, data, isFetched, isFetching, ...query
  } = useQuery(['movie', movieId], () => fetchMovie(movieId), {
    select: (data) => data.data,
  });

  console.log(data);
  return (
    <Container>
      <MarginVertical>
        <Grid col={2}>
          <img src={`${img500}${data?.poster_path}`} alt="" />
          <div>
            <h1>{data?.title}</h1>
            <div>
              Türler:
              {data?.genres.map((genre) => (
                <span key={genre.id}>
                  {genre.name}
                  ,
                  {' '}
                </span>
              ))}
              <span>
                &
                {data?.release_date}
              </span>
            </div>
            <div>
              <p>{data?.tagline}</p>
              <p>{data?.overview}</p>
            </div>
            <div />
          </div>
        </Grid>
      </MarginVertical>
    </Container>
  );
}

export default MovieDetail;
