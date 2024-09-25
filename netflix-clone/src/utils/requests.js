const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  //   fetchTopRa: `/trending/tv/day?api_key=${API_KEY}`,
};
export default requests;
