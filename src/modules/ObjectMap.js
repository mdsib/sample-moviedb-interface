export default {
  extractMovies: (listName, movieData) => {
    var movies = {};
    var list = [];
    for (let movie of movieData) {
      movies[movie.id] = {title: movie.title};
      list.push(movie.id);
    }
    return {[listName]: list, movies: movies};
  }
}
