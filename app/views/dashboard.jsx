import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../actions/login';

class Dashboard extends React.Component {
  render() {
    const { login, actions } = this.props;

    return (
      <div>Dashboard</div>
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
)(Dashboard);

