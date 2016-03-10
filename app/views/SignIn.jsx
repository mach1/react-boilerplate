import React from 'react'
import bootstrap from 'bootstrap-webpack'
import styles from './SignIn.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/login'
import { routeActions } from 'redux-simple-router'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.doLogin = this.doLogin.bind(this)
  }

  doLogin() {
    const details = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.props.actions.login.doLogin(details)
  }

  render() {
    const { login, actions } = this.props;

    return (
      <form className="signin-form">
	<h2>Please sign in</h2>
	<input type="text" ref="username" className="form-control username" placeholder="Email address"/>
	<input type="password" ref="password" className="form-control password" placeholder="Password"/>
	<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.doLogin}>Sign in</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(LoginActions, dispatch)
    }
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
