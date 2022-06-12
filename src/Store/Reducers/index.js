import { FETCH_MOVIES, SEARCH_MOVIES } from "../../Actions/types";

export default function reducers(state = { movies: [] }, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      const moviesArray =
        action.payload.page === "1"
          ? action.payload.data.list
          : state.movies
          ? state.movies.concat(action.payload.data.list)
          : [];
      return {
        ...state,
        movies: moviesArray,
        total: action.payload.data.total,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload.list,
        total: action.payload.total,
      };
    default:
      return state;
  }
}
