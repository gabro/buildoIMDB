import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { moviesReducer } from './reducers'

const store = createStore(
   moviesReducer, 
   {searchString: ''},
   applyMiddleware(thunkMiddleware));

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, document.getElementById('root'));
