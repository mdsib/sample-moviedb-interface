import store from '../src/store.js';
import {expect} from 'chai';
import actions from '../src/actions';

describe('reducers', () => {
  const movieData = [
    {
      "adult": false,
      "backdrop_path": "/cAW1NAahXhBUFJZgicBIGPs2OkZ.jpg",
      "genre_ids": [
        16,
        28,
        12
      ],
      "id": 13851,
      "original_language": "en",
      "original_title": "Batman: Gotham Knight",
      "overview": "Explore Bruce Wayne's transition from his beginning as a tormented vigilantee to The Dark Knight of a crumbling metropolis with six distinct chapters but intended to be viewed as a whole.",
      "popularity": 1.514758,
      "poster_path": "/gZb4h7aYRDzUsziErNyrPACo8wv.jpg",
      "release_date": "2008-07-03",
      "title": "Batman: Gotham Knight",
      "video": false,
      "vote_average": 6.89,
      "vote_count": 89
    },
    {
      "adult": false,
      "backdrop_path": "/rHNz1AlYG0S9J3CGp9ObSFxUyMH.jpg",
      "genre_ids": [
        28,
        16
      ],
      "id": 40662,
      "original_language": "en",
      "original_title": "Batman: Under the Red Hood",
      "overview": "Batman faces his ultimate challenge as the mysterious Red Hood takes Gotham City by firestorm. One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code.",
      "popularity": 1.953872,
      "poster_path": "/78kjgspmLLOm2Glgpzqo9cS4GpI.jpg",
      "release_date": "2010-07-27",
      "title": "Batman: Under the Red Hood",
      "video": false,
      "vote_average": 7.58,
      "vote_count": 245
    }
  ];
  const moreMovieData = [
    {
      "adult": false,
      "backdrop_path": "/hAhMOPPPxzCKsCu5rUMYdwS8Yb5.jpg",
      "genre_ids": [
        28,
        12,
        16,
        878,
        80
      ],
      "id": 69735,
      "original_language": "en",
      "original_title": "Batman: Year One",
      "overview": "Two men come to Gotham City: Bruce Wayne after years abroad feeding his lifelong obsession for justice and Jim Gordon after being too honest a cop with the wrong people elsewhere. After learning painful lessons about the city's corruption on its streets and police department respectively, this pair learn how to fight back their own way. With that, Gotham's evildoers from top to bottom are terrorized by the mysterious Batman and the equally heroic Gordon is assigned to catch him by comrades who both hate and fear him themselves. In the ensuing manhunt, both find much in common as the seeds of an unexpected friendship are laid with additional friends and rivals helping to start the legend.",
      "popularity": 1.494846,
      "poster_path": "/bI1YVuhBN6Vws1GP9Mf01DyhC2s.jpg",
      "release_date": "2011-09-27",
      "title": "Batman: Year One",
      "video": false,
      "vote_average": 7.15,
      "vote_count": 144
    }
  ];
  it('fills initial state', () => {
    expect(store.getState()).to.eql({
      movies: {},
      lists: {
        top: {
          title: "Popular Movies",
          results: [],
          didError: false,
          isFetching: false
        }
      }
    });
  });
  it('updates the store with movie data', () => {
    store.dispatch(actions.updateMovies('top', movieData))
    expect(store.getState()).to.eql({
      "lists": {
        "top": {
          "title": "Popular Movies",
          "didError": false,
          "isFetching": false,
          "results": [
            13851,
            40662
          ]
        }
      },
      "movies": {
        "13851": {
          "adult": false,
          "backdrop_path": "/cAW1NAahXhBUFJZgicBIGPs2OkZ.jpg",
          "genre_ids": [
            16,
            28,
            12
          ],
          "id": 13851,
          "original_language": "en",
          "original_title": "Batman: Gotham Knight",
          "overview": "Explore Bruce Wayne's transition from his beginning as a tormented vigilantee to The Dark Knight of a crumbling metropolis with six distinct chapters but intended to be viewed as a whole.",
          "popularity": 1.514758,
          "poster_path": "/gZb4h7aYRDzUsziErNyrPACo8wv.jpg",
          "release_date": "2008-07-03",
          "title": "Batman: Gotham Knight",
          "video": false,
          "vote_average": 6.89,
          "vote_count": 89
        },
        "40662": {
          "adult": false,
          "backdrop_path": "/rHNz1AlYG0S9J3CGp9ObSFxUyMH.jpg",
          "genre_ids": [
            28,
            16
          ],
          "id": 40662,
          "original_language": "en",
          "original_title": "Batman: Under the Red Hood",
          "overview": "Batman faces his ultimate challenge as the mysterious Red Hood takes Gotham City by firestorm. One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code.",
          "popularity": 1.953872,
          "poster_path": "/78kjgspmLLOm2Glgpzqo9cS4GpI.jpg",
          "release_date": "2010-07-27",
          "title": "Batman: Under the Red Hood",
          "video": false,
          "vote_average": 7.58,
          "vote_count": 245
        }
      }
    });
  });
  it('updates the store with more movie data', () => {
    store.dispatch(actions.updateMovies('top', moreMovieData));
    expect(store.getState()).to.eql({
      "lists": {
        "top": {
          "title": "Popular Movies",
          "didError": false,
          "isFetching": false,
          "results": [
            69735
          ]
        }
      },
      "movies": {
        "13851": {
          "adult": false,
          "backdrop_path": "/cAW1NAahXhBUFJZgicBIGPs2OkZ.jpg",
          "genre_ids": [
            16,
            28,
            12
          ],
          "id": 13851,
          "original_language": "en",
          "original_title": "Batman: Gotham Knight",
          "overview": "Explore Bruce Wayne's transition from his beginning as a tormented vigilantee to The Dark Knight of a crumbling metropolis with six distinct chapters but intended to be viewed as a whole.",
          "popularity": 1.514758,
          "poster_path": "/gZb4h7aYRDzUsziErNyrPACo8wv.jpg",
          "release_date": "2008-07-03",
          "title": "Batman: Gotham Knight",
          "video": false,
          "vote_average": 6.89,
          "vote_count": 89
        },
        "40662": {
          "adult": false,
          "backdrop_path": "/rHNz1AlYG0S9J3CGp9ObSFxUyMH.jpg",
          "genre_ids": [
            28,
            16
          ],
          "id": 40662,
          "original_language": "en",
          "original_title": "Batman: Under the Red Hood",
          "overview": "Batman faces his ultimate challenge as the mysterious Red Hood takes Gotham City by firestorm. One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code.",
          "popularity": 1.953872,
          "poster_path": "/78kjgspmLLOm2Glgpzqo9cS4GpI.jpg",
          "release_date": "2010-07-27",
          "title": "Batman: Under the Red Hood",
          "video": false,
          "vote_average": 7.58,
          "vote_count": 245
        },
        "69735": {
          "adult": false,
          "backdrop_path": "/hAhMOPPPxzCKsCu5rUMYdwS8Yb5.jpg",
          "genre_ids": [
            28,
            12,
            16,
            878,
            80
          ],
          "id": 69735,
          "original_language": "en",
          "original_title": "Batman: Year One",
          "overview": "Two men come to Gotham City: Bruce Wayne after years abroad feeding his lifelong obsession for justice and Jim Gordon after being too honest a cop with the wrong people elsewhere. After learning painful lessons about the city's corruption on its streets and police department respectively, this pair learn how to fight back their own way. With that, Gotham's evildoers from top to bottom are terrorized by the mysterious Batman and the equally heroic Gordon is assigned to catch him by comrades who both hate and fear him themselves. In the ensuing manhunt, both find much in common as the seeds of an unexpected friendship are laid with additional friends and rivals helping to start the legend.",
          "popularity": 1.494846,
          "poster_path": "/bI1YVuhBN6Vws1GP9Mf01DyhC2s.jpg",
          "release_date": "2011-09-27",
          "title": "Batman: Year One",
          "video": false,
          "vote_average": 7.15,
          "vote_count": 144
        }
      }
    });
  });
});
