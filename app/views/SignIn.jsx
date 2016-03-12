import React from 'react'
import styles from './SignIn.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as LoginActions from '../actions/login'
import {
  TextField,
  RaisedButton
} from 'material-ui'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.doLogin = this.doLogin.bind(this)
  }

  doLogin () {
    const details = {
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue()
    }
    this.props.actions.login.doLogin(details)
  }

  render () {
    const { login } = this.props
    const loading = login.get('loading')

    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Please sign in</h2>
        <TextField
          ref='username'
          id='email'
          className={styles.input}
          floatingLabelText='Email address'
        />
        <TextField
          id='password'
          ref='password'
          className={styles.input}
          floatingLabelText='Password'
          type='password'
        />
        <div
          className={styles.button}
        >
          <RaisedButton
            onMouseUp={this.doLogin}
            primary
            label='Login'
            fullWidth
            disabled={loading}
          />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      login: bindActionCreators(LoginActions, dispatch)
    }
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
)(SignIn)
