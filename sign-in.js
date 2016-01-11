import React from 'react';
import bootstrap from 'bootstrap-webpack';
import styles from './sign-in.css';

export default React.createClass({
  render() {
    return (
      <form className="signin-form">
	<h2>Please sign in</h2>
	<input type="text" className="form-control username" placeholder="Email address"/>
	<input type="password" className="form-control password" placeholder="Password"/>
	<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }
})
