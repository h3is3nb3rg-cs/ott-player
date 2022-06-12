import { getMovies, findMovies } from "../Data/data";
import { FETCH_MOVIES, SEARCH_MOVIES } from "./types";

export function fetchMovies(pageNumber) {
  return function (dispatch) {
    getMovies(pageNumber)
      .then((data) => {
        
        dispatch(setMovies({ page: pageNumber, data: data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function searchMovies(searchString) {
  return function (dispatch) {
    findMovies(searchString)
      .then((data) => {
        console.log(data, ">searchdata");
        dispatch(setSearchResults(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

function setMovies(data) {
  return {
    type: FETCH_MOVIES,
    payload: data,
  };
}

function setSearchResults(data) {
  return {
    type: SEARCH_MOVIES,
    payload: data,
  };
}
