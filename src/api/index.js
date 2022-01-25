import axios from 'axios';

const base = axios.create({ baseURL: 'https://api.themoviedb.org/3' });
const apiKey = '?api_key=f6db4a9ce9835b4bdf3f475e4c395064';
const img300 = 'https://image.tmdb.org/t/p/w300';
const img500 = 'https://image.tmdb.org/t/p/w500';
const defaultImg = 'https://st4.depositphotos.com/1156795/20814/v/450/depositphotos_208142514-stock-illustration-profile-placeholder-image-gray-silhouette.jpg';

// home widget
const fetchTrending = (timeWindow) => {
  console.log(timeWindow);
  return base.get(`/trending/movie/${timeWindow}${apiKey}`);
};

const fetchDiscover = () => base.get(`/discover/movie${apiKey}`);

// movie search
const fetchSearch = (search) => base.get(`/search/movie${apiKey}&query=${search}`);
// fetch genres
const fetchGenres = () => base.get(`/genre/movie/list${apiKey}`);
// movie detail
const fetchMovie = (movieId) => base.get(`/movie/${movieId}${apiKey}`);

// movie cast and crew
const fetchCredit = (movieId) => base.get(`/movie/${movieId}/credits${apiKey}`);

// movie reviews
const fetchReviews = (movieId) => base.get(`/movie/${movieId}/reviews${apiKey}`);

// movie recommendations
const fetchRecommendations = (movieId) => base.get(`/movie/${movieId}/recommendations${apiKey}`);

// movie category
const fetchCat = (movieCat, page) => base.get(`/movie/${movieCat}${apiKey}&page=${page}`);

export {
  fetchTrending,
  fetchDiscover,
  fetchSearch,
  fetchGenres,
  fetchMovie,
  fetchCredit,
  fetchReviews,
  fetchRecommendations,
  fetchCat,
  base,
  apiKey,
  img300,
  img500,
  defaultImg,
};
