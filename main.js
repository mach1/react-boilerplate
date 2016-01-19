import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Provider } from 'react-redux';
import { syncHistory, routeReducer } from 'react-simple-router';
import configureStore from './store/configureStore.js';
import SignIn from './views/sign-in.jsx';
import Dashboard from './views/dashboard.jsx';

const store = configureStore();

render((
  <Provider store={store}>
    <Router>
      <Route path="/" component={SignIn} />
      <Route path="/" component={Dashboard} />
    </Router>
  </Provider>
), document.getElementById('container'))
