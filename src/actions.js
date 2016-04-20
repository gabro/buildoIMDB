import OmdbApi from './controllers/omdbapi'

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE_INFO = "FETCH_MOVIE_INFO";
export const SHOW_ERROR = "SHOW_ERROR";

export const fetchMovies = (omdbApi, searchString) => {
   return function(dispatch) {
      dispatch(requestMovies(searchString));
      return omdbApi.fetchMovies.call(omdbApi, dispatch, searchString);
   }
}

export const fetchMovieInfo = (omdbApi, movieId) => {
   return function(dispatch) {
      dispatch(requestMovieInfo(movieId));
      return omdbApi.fetchMovieInfo.call(omdbApi, dispatch, movieId);
   }
}

export const requestMovies = (searchString) => {
   return {
      type: FETCH_MOVIES,
      searchString
   };
}

export const receiveMovies = (movies = []) => {
   return {
      type: FETCH_MOVIES,
      status: 'success',
      movies: movies
   }
}

export const requestMovieInfo = (movieId) => {
   return {
      type: FETCH_MOVIE_INFO,
      movieId
   };
}

export const receiveMovieInfo = (info) => {
   return {
      type: FETCH_MOVIE_INFO,
      status: 'success',
      movieId: info.imdbID,
      info: info
   }
}

export const showErrorMessage = (errorMessage) => {
   return {
      type: SHOW_ERROR,
      errorMessage
   }
}
