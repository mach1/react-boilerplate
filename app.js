import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from './actions/login';
import SignIn from './sign-in.js';

class App extends React.Component {
  render() {
    const { login, actions } = this.props;
    return <SignIn/>
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
)(App);
