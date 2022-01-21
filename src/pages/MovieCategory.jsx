//query
import { useQuery } from "react-query";
import { fetchCat, img_300 } from "../api";
//router
import { useParams } from "react-router-dom";
import { useState } from "react";
//css
import { Container, MarginVertical, Grid } from "../styles/baseStyles";
import { MovieCard } from "../components";

const MovieCategory = () => {
  const [page, setPage] = useState(1);
  const { movieCat } = useParams();
  const { isError, isLoading, error, data, isFetched, isFetching, ...query } =
    useQuery(
      ["movieCategory", movieCat, page],
      () => fetchCat(movieCat, page),
      {
        select: (data) => data.data.results,
      }
    );
  console.log(page);
  return (
    <>
      <Container>
        <MarginVertical>
          <Grid col={4}>
            {data?.map((item) => (
              <MovieCard data={item} />
            ))}
            <button onClick={() => setPage(page + 1)}>Load More</button>
          </Grid>
        </MarginVertical>
      </Container>
    </>
  );
};

export default MovieCategory;
