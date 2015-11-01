import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

var App = React.createClass({
  render() {
    return <h1>Hello</h1>
  }
})

render((
  <Router>
    <Route path="/" component={App}>
 
    </Route>
  </Router>
), document.getElementById('container'))
