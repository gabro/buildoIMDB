import * as Actions from './actions';
import { combineReducers } from 'redux'

export const moviesReducer = (state, action) => {
   switch(action.type) {
      case Actions.FETCH_MOVIES:
         if(typeof(action.status) === 'undefined') {
            return Object.assign({}, state, {errorMessage: '', searchString: action.searchString, isFetching: true});
         } else if (action.status === 'success'){
            return Object.assign({}, state, {isFetching: false, movies: action.movies });
         }
      case Actions.FETCH_MOVIE_INFO:
         let movieIndex = state.movies.findIndex(movie => movie.imdbID == action.movieId);
         let newMovie;
         if(typeof(action.status) === 'undefined') {
            newMovie = Object.assign({}, state.movies[movieIndex], {isFetchingInfo: true });
         } else if (action.status === 'success'){
            newMovie = Object.assign({}, state.movies[movieIndex], {isFetchingInfo: false, ...action.info });
         }
         let newMovies = [
            ...state.movies.slice(0, movieIndex),
            newMovie,
            ...state.movies.slice(movieIndex + 1)
         ];
         return Object.assign({}, state, { movies: newMovies });
      case Actions.SHOW_ERROR:
         return Object.assign({}, state, { movies: [], errorMessage: action.errorMessage, isFetching: false });
      default:
         return state;
   }
}