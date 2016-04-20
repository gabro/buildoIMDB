import React from 'react';
import SearchBox from './SearchBox'
import MovieList from './MovieList'

export default React.createClass(
   {
      render: function()
      {
         return (
            <div>
               <SearchBox omdbApi={this.props.omdbApi} />
               <MovieList />
            </div>
         )
      }
   }
)
