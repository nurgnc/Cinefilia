import { useQuery } from "react-query";
import { fetchDiscover } from "../api";
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./SliderSettings";

//components
import MovieCard from "./MovieCard";
//css
import { MarginVertical } from "../styles/baseStyles";

const DiscoverWidget = () => {
  const { isFetching, isLoading, isError, error, data, isFetched, ...query } =
    useQuery("discoverMovie", fetchDiscover, {
      select: (data) => data.data.results,
    });

  return (
    <MarginVertical>
      <h1>Discover</h1>
      <Slider {...settings}>
        {data?.map((item) => (
          <MovieCard data={item} />
        ))}
      </Slider>
    </MarginVertical>
  );
};

export default DiscoverWidget;
