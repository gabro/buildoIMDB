import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'

const MovieListInt =  React.createClass({

   render: function() {
      return (
            <div id="movieList">
            { this.props.errorMessage ? <div className="errorMessage">{ this.props.errorMessage }</div> : null }
            { this.props.movies.map(movie => <Movie key={movie.imdbID} {...movie}/>) }
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

const MovieList = connect(
   mapStateToProps,
   null
)(MovieListInt);

export default MovieList;
