import React, { PropTypes } from 'react'

const Movie =  React.createClass({

   render: function() {
      return (
            <div className="movieBox">
               <div className="movieTitle">{this.props.Title}</div>
               <div className="movieYear">{this.props.Year}</div>
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
