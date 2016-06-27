import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions';

const homepage = (url) => url ? <a target="_blank" href={url}>Homepage</a> : null;
const tagline = (tagline) => tagline ? <h2>{tagline}</h2> : null;
const votes = (score) => score ? <p>{score} / 10</p> : null;

const MovieDetail = ({movie}) => (
  movie ? (
    <div>
      <h1>{movie.title}</h1>
      {tagline(movie.tagline)}
      {votes(movie.vote_average)}
      {homepage(movie.homepage)}<br />
      <p>{movie.overview}</p>
      <img src={movie.smImg} />
    </div>
  ) : <h1>Loading...</h1>
);

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies[ownProps.params.id]
  }
}

export default connect(mapStateToProps)(MovieDetail);
