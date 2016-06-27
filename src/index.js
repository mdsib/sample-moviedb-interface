import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import ResultsContainer from './containers/ResultsContainer';
import MovieDetail from './components/MovieDetail';
import store from './store';
import actions from './actions';
import { Router, Route, Link, browserHistory } from 'react-router'


const rootChange = (prevState, nextState) => {
  var listName = nextState.location.query.query ?
    `search:${nextState.location.query.query}` :
    'top';
  store.dispatch(actions.updateMovieList(listName, nextState.location.query.query))
}

const rootEnter = (nextState) => rootChange(null, nextState)

const movieDetailEnter = (nextState) => store.dispatch(actions.getMovie(nextState.params.id))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route
        path="/"
        component={ResultsContainer}
        onEnter={rootEnter}
        onChange={rootChange}
      />
      <Route
        path="/movies/:id"
        component={MovieDetail}
        onEnter={movieDetailEnter}
      />
    </Router>
  </Provider>,
  document.getElementById('app'));
