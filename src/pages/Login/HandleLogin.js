import React from 'react'
import { connect } from 'react-redux'
import { handleBlockstackLogin } from '../../actions/userActions'
import * as blockstack from 'blockstack'

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    handlePendingSignIn: () => {
      dispatch(handleBlockstackLogin())
    }
  }
}

const HandleLogin = ({user, handlePendingSignIn, ...rest}) => {
  // Handle sign in from blockstack after redirect
  // Once sign in completes (promise is fulfilled), redirect to an authenticated only route
  if (user.isLoginPending) {
    handlePendingSignIn()
  }

  return (
    <div className='Login'>
      <h2>Logging In...</h2>
    </div>
  )
}

const HandleLoginContainer = connect(mapStateToProps, mapDispatchToProps)(HandleLogin)

export default HandleLoginContainer
