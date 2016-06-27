import store from '../store.js'
import ObjectMap from '../modules/ObjectMap';
import MovieDB from '../modules/MovieDB';

const beginFetch = (listName, query) => {
  return {
    type: "FETCH_LIST",
    listName: listName,
    query: query
  }
}

const listError = (listName) => {
  return {
    type: "LIST_ERROR",
    listName: listName
  }
}

const updateMovie = (movie) => {
  return {
    type: "UPDATE_MOVIE",
    movie: movie
  }
}

const updateMovies = (listName, movies) => {
  return {
    type: "UPDATE_MOVIES",
    listName: listName,
    movies: movies
  }
}

export default {
  updateMovies: updateMovies,

  getMovie: (id) => {
    return (dispatch) => {
      MovieDB.getMovie(id).then((res) => {
        dispatch(updateMovie(res));
      })
    }
  },

  //get movies if there are none in the given list
  updateMovieList: (listName, query) => {
    return (dispatch) => {
      let movieList = store.getState().lists[listName];
      if (!movieList || !movieList.results.length) {
        dispatch(beginFetch(listName, query));
        if (listName == 'top') {
          MovieDB.getTop().then((res) => {
            dispatch(updateMovies(listName, res))
          }, (err) => {
            dispatch(listError(listName));
          });
        }
        else {
          MovieDB.queryMovies(query).then((res) => {
            dispatch(updateMovies(listName, res));
          }, (err) => {
            ;
            dispatch(listError(listName));
          });
        }
      }
    }
  }
}
