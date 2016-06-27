import {combineReducers} from 'redux';

var lists = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_LIST":
      return Object.assign({}, state, {[action.listName]: list(state[action.listName], action)})
    case "UPDATE_MOVIES":
      return Object.assign({}, state, {[action.listName]: list(state[action.listName], action)})
    case "LIST_ERROR":
      return Object.assign({}, state, {[action.listName]: list(state[action.listName], action)})
    default:
      return state;
  }
}

var list = (state = {results: [], didError: false, isFetching: false, title: ''}, action) => {
  switch (action.type) {
    case "FETCH_LIST":
      var updates = {isFetching: true, didError: false};
      if (!state.title) {
        updates.title = action.listName == 'top' ? 'Popular Movies' : `Results for ${action.query}`;
      }
      return Object.assign({}, state, updates);
    case "UPDATE_MOVIES":
      return Object.assign({}, state, {isFetching: false, didError: false, results: action.movies.map((mov) => mov.id)});
    case "LIST_ERROR":
      return Object.assign({}, state, {isFetching: false, didError: true})
    default:
      return state;
  }
}

var movies = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_MOVIES":
      var movies = {};
      for (let movie of action.movies) {
        movies[movie.id] = movie;
      }
      return Object.assign({}, state, movies);
    case "UPDATE_MOVIE":
      return Object.assign({}, state, {[action.movie.id]:action.movie});
    default:
      return state;
  }
}

export default combineReducers({lists: lists, movies: movies});
