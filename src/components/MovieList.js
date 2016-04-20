import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import { fetchMovieInfo } from '../actions'


const MovieListInt =  React.createClass({

   render: function() {
      return (
            <div id="movieList">
            { this.props.errorMessage ? <div className="errorMessage">{ this.props.errorMessage }</div> : null }
            { this.props.movies.map(movie => <Movie fetchMovieInfo={ this.props.fetchMovieInfo } key={movie.imdbID} {...movie}/>) }
            </div>
      );
   },

   propTypes: {
      movies: PropTypes.arrayOf(PropTypes.shape({
         imdbID: PropTypes.string.isRequired,
         Title: PropTypes.string.isRequired,
         Year: PropTypes.string.isRequired,
         Poster: PropTypes.string.isRequired
      }).isRequired).isRequired
   }
});

const mapStateToProps = (state, props) => {
   return {
      movies: state.movies,
      errorMessage: state.errorMessage
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      fetchMovieInfo: (movieId) => dispatch(fetchMovieInfo(ownProps.omdbApi, movieId))
   }
}

const MovieList = connect(
   mapStateToProps,
   mapDispatchToProps
)(MovieListInt);

export default MovieList;
