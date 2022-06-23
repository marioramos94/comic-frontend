import axios from "axios";

export const getComic = (comic) => {
  if (comic === "last") {
    return axios.get("/comic");
  } else if (comic === "random") {
    return axios.get("/random");
  } else {
    return axios.get(`/comic/${comic}`);
  }
};
