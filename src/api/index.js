import axios from 'axios';

const base = axios.create({ baseURL: 'https://api.themoviedb.org/3' });
const apiKey = '?api_key=f6db4a9ce9835b4bdf3f475e4c395064';
const img300 = 'https://image.tmdb.org/t/p/w300';
const img500 = 'https://image.tmdb.org/t/p/w500';

// const token = '"request_token": "5828121c9863edc4778fa7e25305b8c0645755fa"';
// http://localhost:3000/approved?request_token=5828121c9863edc4778fa7e25305b8c0645755fa&approved=true

// home widget
const fetchTrending = (timeWindow) => base.get(`/trending/movie/${timeWindow}${apiKey}`);

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
};
