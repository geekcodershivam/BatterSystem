import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk'

const store = createStore(reducers, {}, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);
