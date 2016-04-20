import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { moviesReducer } from './reducers'
import OmdbApi from './controllers/omdbapi'

require("./styles/style.css");

const store = createStore(
   moviesReducer,
   {isFetching: false, movies: [], errorMessage: ''},
   applyMiddleware(thunkMiddleware));

const omdbApi = new OmdbApi(store.dispatch);

ReactDOM.render(
   <Provider store={store}>
      <App omdbApi={omdbApi} />
   </Provider>, document.getElementById('root'));
