import axios from "axios";
axios.defaults.baseURL = "http://localhost:3333";

export default {
  getMovie(id) {
    return axios.get(`/movies/${id}`).then(res => res.data);
  },
  searchMovies(query) {
    return axios.get(`/movies/search?query=${query}`).then(res => res.data);
  },
  getTopMovies(from, to) {
    return axios.get(`/movies/top?from=${from}&to=${to}`).then(res => res.data);
  },
  getActor(id) {
    return axios.get(`/actors/${id}`).then(res => res.data);
  },
  searchActors(query) {
    return axios.get(`/actors/search?query=${query}`).then(res => res.data);
  }
};
