import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'

const SearchBoxInt =  React.createClass({

   getInitialState: function() {
      return { searchString: '' };
   },

   handleSubmit: function(e) {
      this.props.onSearchBoxSubmit(this.state.searchString);
      e.preventDefault();
   },

   handleChange: function(e) {
      this.setState({
         searchString: e.target.value
      });
   },

   render: function() {
      return (
         <form className="form-wrapper cf" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search here..." value={this.state.searchString} onChange={this.handleChange} required />
            <button type="submit">
               {this.state.loading ? 'Loading...' : 'Search'}
            </button>
         </form>
      );
   },

   propTypes: {
      onSearchBoxSubmit: PropTypes.func.isRequired
   }
});

const mapStateToProps = (state, props) => {
   return {
      searchString: state.searchString
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSearchBoxSubmit: (searchString) => {
         dispatch(fetchMovies(searchString));
      }
   }
}

const SearchBox = connect(
   mapStateToProps,
   mapDispatchToProps
)(SearchBoxInt);

export default SearchBox;
