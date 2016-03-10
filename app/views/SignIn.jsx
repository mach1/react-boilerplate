import React from 'react'
import bootstrap from 'bootstrap-webpack'
import styles from './SignIn.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/login'
import { routeActions } from 'redux-simple-router'

class SignIn extends React.Component {
  render() {
    const { login, actions } = this.props;

    return (
      <form className="signin-form">
	<h2>Please sign in</h2>
	<input type="text" className="form-control username" placeholder="Email address"/>
	<input type="password" className="form-control password" placeholder="Password"/>
	<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
