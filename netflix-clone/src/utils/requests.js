const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTranding: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/trending/movie/day?api_key=${API_KEY}`,
  fetchTopRatedMovies: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
};
export default requests;
