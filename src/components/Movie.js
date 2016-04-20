import React, { PropTypes } from 'react'
import classNames from 'classnames'

const Movie =  React.createClass({

   getInitialState: function() {
      return {
         isFetchingPoster: true,
         isFetchingPosterFailed: false
      }
   },

   onPosterLoad: function() {
      this.setState({
         isFetchingPoster: false,
      });
   },

   onPosterError: function(e) {
      this.setState({
         isFetchingPoster: false,
         isFetchingPosterFailed : true
      });
      e.target.src = '';
   },

   render: function() {

      let imageClasses = classNames(
         'poster-image',
         { 'poster-image-load': this.state.isFetchingPoster },
         { 'poster-image-notfound' : this.state.isFetchingPosterFailed });

      return (
            <div className="movie-box">
               <img src={this.props.Poster} className={imageClasses} onLoad={ this.onPosterLoad } onError= { this.onPosterError } />
               <div className="movie-info">
                  <div className="movie-title">{this.props.Title}</div>
                  <div className="movie-year">{this.props.Year}</div>
               </div>
            </div>
      );
   },

   propTypes: {
      imdbID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired
   }
});

export default Movie;
