import * as Actions from './actions';

export const moviesReducer = (state = [], action) => {
   switch(action.type) {
      case Actions.FETCH_MOVIES:
         if(typeof(action.status) === 'undefined') {
            return Object.assign({}, state, {searchString: action.searchString, isFetching: true});
         } else if (action.status === 'success'){
            return Object.assign({}, state, {isFetching: false, movies: action.movies });
         }
      default:
         return state;
   }
}
