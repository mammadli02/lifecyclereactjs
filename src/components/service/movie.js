const movieEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=7e3d70e2d0fc85df0bfb0113024f1a15&query=titanic`;

export const getMovie = () => {
  return fetch(movieEndpoint);
};