import * as Actions from './actions';

export const moviesReducer = (state = [], action) => {
   switch(action.type) {
      case Actions.FETCH_MOVIES:
         if(typeof(action.status) === 'undefined') {
            return Object.assign({}, state, {errorMessage: '', searchString: action.searchString, isFetching: true});
         } else if (action.status === 'success'){
            return Object.assign({}, state, {isFetching: false, movies: action.movies });
         }
      case Actions.SHOW_ERROR:
         return Object.assign({}, state, { movies: [], errorMessage: action.errorMessage, isFetching: false });
      default:
         return state;
   }
}
