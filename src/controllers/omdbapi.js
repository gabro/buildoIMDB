import { receiveMovies, showErrorMessage, receiveMovieInfo } from '../actions'

export default function OmdbApi(dispatch) {
	this.IsError = function(resp) {
  		return resp.Response == 'False';
  	};

	this.fetchMovies = function(dispatch, searchString) {
		return fetch('http://www.omdbapi.com/?s=' + searchString + '&plot=short&r=json')
         .then(response => response.json())
         .then(json => {
         	if(this.IsError(json)) {
         		dispatch(showErrorMessage(json.Error))
         	}
         	else {
         		dispatch(receiveMovies(json.Search));
         	}
         })
         .catch(e => dispatch(showErrorMessage('Sorry, something went wrong')));
  	};


  	this.fetchMovieInfo = function(dispatch, movieID) {
  		return fetch('http://www.omdbapi.com/?i=' + movieID + '&plot=short&r=json')
         .then(response => response.json())
         .then(json => {
         	if(this.IsError(json)) {
         		dispatch(showErrorMessage(json.Error))
         	}
         	else {
         		dispatch(receiveMovieInfo(json))
         	}
         })
         .catch(e => dispatch(showErrorMessage('Sorry, something went wrong')));
  	}
}