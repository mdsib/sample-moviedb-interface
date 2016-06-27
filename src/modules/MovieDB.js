import $ from 'jquery';

//TODO: PUT IN ENV
var API_KEY = env.MDB_API_KEY;

var baseImageUrls = null;

const getBaseImageUrl = () => {
  return new Promise((resolve, reject) => {
    if (baseImageUrls) resolve(baseImageUrls);
    else {
      $.ajax({url: `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`})
      .done((data) => {
        resolve(baseImageUrls = {
          small: data.images.secure_base_url + data.images.poster_sizes[2],
          large: data.images.secure_base_url + data.images.poster_sizes[5]
        });
      }, (err) => {
        reject(err);
      })
    }
  })
}

const updateImageUrls = (movies) => {
  return new Promise((resolve, reject) => {
    getBaseImageUrl().then((imageData) => {
      for (let movie of movies) {
        movie.smImg = imageData.small + movie.poster_path;
        movie.lgImg = imageData.large + movie.poster_path;
      }
      resolve(movies);
    });
  })
}

export default {
  getMovie: (id) => {
    return new Promise((resolve, reject) => {
      $.ajax({ url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}` })
      .done((data) => {
        updateImageUrls([data])
        .then((movies) => {
          resolve(movies[0]);
        })
        .catch((err) => {
          reject(err);
        })
      })
      .fail((err) => {
        reject(err);
      })
    })
  },
  getTop: () => {
    return new Promise((resolve, reject) => {
      $.ajax({ url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` })
      .done((data) => {
        updateImageUrls(data.results)
        .then((movies) => {
          resolve(movies);
        })
        .catch((err) => {
          reject(err);
        })
      })
      .fail((err) => {
        reject(err);
      })
    })
  },
  queryMovies: (query) => {
    return new Promise((resolve, reject) => {
      $.ajax({ url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}` })
      .done((data) => {
        updateImageUrls(data.results)
        .then((movies) => {
          resolve(movies);
        })
        .catch((err) => {
          reject(err);
        })
      })
      .fail((err) => {
        reject(err);
      })
    })
  }
}
