import React, { PropTypes } from 'react'

const Movie =  React.createClass({

   render: function() {
      return (
            <div className="movieBox">
               <div className="movieTitle">{this.props.info.Title}</div>
               <div className="movieYear">{this.props.info.Year}</div>
            </div>
      );
   },

   propTypes: {
      info: PropTypes.shape({
         imdbID: PropTypes.string.isRequired,
         Title: PropTypes.string.isRequired,
         Year: PropTypes.string.isRequired,
         Poster: PropTypes.string.isRequired
      }).isRequired
   }
});

export default Movie;
