import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/login'
import {
  AppBar,
  FlatButton
} from 'material-ui'

class Dashboard extends React.Component {
  render () {
    const { actions } = this.props
    return (
      <AppBar
        title='My App'
        zDepth={5}
        showMenuIconButton={false}
        iconElementRight={<FlatButton label='Sign out' onMouseUp={actions.logout}/>}
      />
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    login: state.login
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
