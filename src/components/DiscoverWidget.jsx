import { useQuery } from "react-query";
import { fetchDiscover } from "../api";
import MovieCard from "./MovieCard";
//css
import { Container, Grid } from "../styles/baseStyles";

const DiscoverWidget = () => {
  const { isFetching, isLoading, isError, error, data, isFetched, ...query } =
    useQuery("discoverMovie", fetchDiscover, {
      select: (data) => data.data.results,
    });
  return (
    <Container>
      <Grid>
        {data?.map((item) => (
          <MovieCard data={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default DiscoverWidget;
