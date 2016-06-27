import React from 'react';
import {Link} from 'react-router';

export default ({movie}) => (
  <div>
    <Link to={`/movies/${movie.id}`} className="movie-item">{movie.title}</Link>
  </div>
)
