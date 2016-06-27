import React, {Component} from 'react';
import {connect} from 'react-redux';
import Results from '../components/Results';
import Search from '../components/Search';
import actions from '../actions';

const ResultsContainer = ({listName, movieList}) => (
  <div>
    <Search listName={listName} />
    <Results movieList={movieList} />
  </div>
)

const mapStateToProps = (state, ownProps) => {
  var listName;
  if (ownProps.location.query.query) {
    listName = `search:${ownProps.location.query.query}`;
  }
  else {
    listName = 'top';
  }
  var movieList = state.lists[listName] && state.lists[listName].results.map((id) => state.movies[id]);
      movieList = Object.assign({}, state.lists[listName], {results: movieList});
  return {listName: listName, movieList: movieList};
};

export default connect(mapStateToProps)(ResultsContainer);
