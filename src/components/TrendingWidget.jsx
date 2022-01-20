import { useQuery } from "react-query";
import { fetchTrending } from "../api";
//redux
import { useSelector, useDispatch } from "react-redux";
import { setTime } from "../store/trendingTime";
//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./SliderSettings";
//components
import MovieCard from "./MovieCard";
//css
import { MarginVertical } from "../styles/baseStyles";

const TrendingWidget = () => {
  const { time } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { isFetching, isLoading, isError, error, data, isFetched, ...query } =
    useQuery("trendingMovie", () => fetchTrending(time), {
      select: (data) => data.data.results,
    });

  return (
    <MarginVertical>
      <h1>Trending</h1>
      <button onClick={() => dispatch(setTime("day"))}>Today</button>
      <button onClick={() => dispatch(setTime("week"))}>Last Week</button>
      <Slider {...settings}>
        {data?.map((item) => (
          <MovieCard data={item} />
        ))}
      </Slider>
    </MarginVertical>
  );
};

export default TrendingWidget;
