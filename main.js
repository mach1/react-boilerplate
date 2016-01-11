import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import SignIn from './sign-in.js'

var App = React.createClass({
  render() {
    return <SignIn/>
  }
})

render((
  <Router>
    <Route path="/" component={App}>
 
    </Route>
  </Router>
), document.getElementById('container'))
