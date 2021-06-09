import {API} from '../../Backend.js'

export const getFeaturedPost = () => {
  return fetch(`${API}blog/featured/post`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getPost = () => {
  return fetch(`${API}blog/`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};