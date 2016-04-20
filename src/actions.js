import OmdbApi from './controllers/omdbapi'

export const FETCH_MOVIES = "FETCH_MOVIES";
export const SHOW_ERROR = "SHOW_ERROR";

export const fetchMovies = (omdbApi, searchString) => {
   return function(dispatch) {
      dispatch(requestMovies(searchString));
      return omdbApi.fetchMovies.call(omdbApi, dispatch, searchString);
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

export const showErrorMessage = (errorMessage) => {
   return {
      type: SHOW_ERROR,
      errorMessage
   }
}
