import { Container, HomeWrapper } from "../styles/baseStyles";
import { DiscoverWidget, MovieSearch, TrendingWidget } from "../components";

const Home = () => {
  return (
    <Container>
      <HomeWrapper></HomeWrapper>
      <MovieSearch />
      <DiscoverWidget />
      <TrendingWidget />
    </Container>
  );
};

export default Home;
