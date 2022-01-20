import { HomeWrapper } from "../styles/baseStyles";
import { DiscoverWidget, TrendingWidget } from "../components";

const Home = () => {
  return (
    <>
      <HomeWrapper></HomeWrapper>
      <DiscoverWidget />
      <TrendingWidget />
    </>
  );
};

export default Home;
