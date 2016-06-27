import {createStore, applyMiddleware} from 'Redux';
import reducer from './reducers'
import thunk from 'redux-thunk';

const initialState = {
  movies: {},
  lists: {
    top: {
      title: "Popular Movies",
      results: [],
      didError: false,
      isFetching: false
    }
  }
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
