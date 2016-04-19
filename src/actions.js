export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_POSTER_REQUEST = "FETCH_POSTER";


export const fetchMovies = (searchString) => {
   return function(dispatch) {
      dispatch(requestMovies(searchString));

      return fetch('http://www.omdbapi.com/?s=' + searchString + '&plot=short&r=json')
         .then(response => response.json())
         .then(json => dispatch(receiveMovies(json)));
   }
}

export const requestMovies = (searchString) => {
   return {
      type: FETCH_MOVIES,
      searchString
   };
}

export const receiveMovies = (json) => {
   console.log(json);
   return {
      type: FETCH_MOVIES,
      status: 'success',
      movies: json
   }
}
