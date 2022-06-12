import { FETCH_MOVIES, SEARCH_MOVIES } from "../../Actions/types";

export default function reducers(state = { movies: [] }, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      console.log(action.payload)
      const moviesArray =
        action.payload.page === "1"
          ? action.payload.data
          : state.movies
          ? state.movies.concat(action.payload.data)
          : [];
      return { ...state, movies: moviesArray };
    case SEARCH_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
