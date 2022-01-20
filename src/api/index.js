import axios from "axios";

const base = axios.create({ baseURL: "https://api.themoviedb.org/3" });
const apiKey = "?api_key=f6db4a9ce9835b4bdf3f475e4c395064";
const img_300 = "https://image.tmdb.org/t/p/w300";
const img_500 = "https://image.tmdb.org/t/p/w500";

const fetchTrending = (time_window) =>
  base.get(`/trending/movie/${time_window}${apiKey}`);
const fetchDiscover = () => base.get(`/discover/movie${apiKey}`);

export { fetchTrending, fetchDiscover, img_300, img_500 };
