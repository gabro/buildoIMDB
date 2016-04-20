import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'

const SearchBoxInt =  React.createClass({

   handleChange: function(e) {
         this.props.onSearchBoxChange(e.target.value);
   },

   render: function() {
      return (
         <form className="form-wrapper cf">
            <input type="text" placeholder="Search here..." value={this.props.searchString} onChange={this.handleChange} required />
            <button type="submit">Search</button>
         </form>
      );
   },

   propTypes: {
      onSearchBoxChange: PropTypes.func.isRequired,
      searchString: PropTypes.string.isRequired
   }
});

const mapStateToProps = (state, props) => {
   return {
      searchString: state.searchString
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSearchBoxChange: (searchString) => {
         dispatch(fetchMovies(searchString));
      }
   }
}

const SearchBox = connect(
   mapStateToProps,
   mapDispatchToProps
)(SearchBoxInt);

export default SearchBox;
