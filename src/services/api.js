import axios from 'axios';

const API_KEY = '07252c2a6aa6a34a84f1028c4fcee284';

export const getMovies = () => {
  return axios.get(
    `
    https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  );
};
export const getMoviesSearch = query => {
  return axios.get(
    `
      https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
};
export const getMoviesDetails = movieId => {
  return axios.get(
    `
        https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
};
export const getMoviesCast = movieId => {
  return axios.get(
    `
      https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
};
export const getMoviesReviews = movieId => {
  return axios.get(
    `
      https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
};
