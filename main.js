import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Provider } from 'react-redux';
import { syncHistory, routeReducer } from 'react-simple-router';
import configureStore from './store/configureStore.js';
import App from './app.js';

const store = configureStore();

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'))
