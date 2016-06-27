import React, {Component} from 'react';
import MovieItem from './MovieItem';

const resultsSection = ({results, isFetching, didError}) => {
  if (isFetching) {
    return 'Loading...'
  }
  if (didError) {
    return 'Couldn\'t load. Try refreshing the page, or try again later.'
  }
  if (!results || !results.length) {
    return 'No results.'
  }
  return results.map((item) => <MovieItem key={item.id} movie={item} />);
}

export default ({movieList}) => (
  <div>
    <h1>{movieList.title}</h1>
    {resultsSection(movieList)}
  </div>
)
