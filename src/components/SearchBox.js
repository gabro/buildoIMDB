import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'
import classNames from 'classnames'

const SearchBoxInt =  React.createClass({

   getInitialState: function() {
      return { searchString: '' };
   },

   handleSubmit: function(e) {
      e.preventDefault();
      if(!this.props.isFetching)
      {
         this.props.onSearchBoxSubmit(this.state.searchString);
      }
   },

   handleChange: function(e) {
      this.setState({
         searchString: e.target.value
      });
   },

   render: function() {

      var buttonClasses = classNames({'fetching': this.props.isFetching})

      return (
         <form className="form-wrapper cf" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search here..." value={this.state.searchString} onChange={this.handleChange} required />
            <button type="submit" className={buttonClasses} disabled={this.props.isFetching}>{this.props.isFetching ? '' : 'Search'}</button>
         </form>
      );
   },

   propTypes: {
      onSearchBoxSubmit: PropTypes.func.isRequired,
      isFetching: PropTypes.bool.isRequired
   }
});

const mapStateToProps = (state, props) => {
   return {
      searchString: state.searchString,
      isFetching: state.isFetching
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
