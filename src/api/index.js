import axios from 'axios';

const base = axios.create({ baseURL: 'https://api.themoviedb.org/3' });
const apiKey = '?api_key=f6db4a9ce9835b4bdf3f475e4c395064';
const img300 = 'https://image.tmdb.org/t/p/w300';
const img500 = 'https://image.tmdb.org/t/p/w500';

// home widget
const fetchTrending = (timeWindow) => base.get(`/trending/movie/${timeWindow}${apiKey}`);
const fetchDiscover = () => base.get(`/discover/movie${apiKey}`);

// movie search
const fetchSearch = (search) => base.get(`/search/movie${apiKey}&query=${search}`);

// movie detail
const fetchMovie = (movieId) => base.get(`/movie/${movieId}${apiKey}`);

// movie category
const fetchCat = (movieCat, page) => base.get(`/movie/${movieCat}${apiKey}&page=${page}`);

export {
  fetchTrending,
  fetchDiscover,
  fetchSearch,
  fetchMovie,
  fetchCat,
  img300,
  img500,
};
