const initialState = {
  isAuthenticated: false,
  isLoginPending: false,
  profile: {},
  error: null
}

export const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER_DATA':
      return { ...state, ...action.payload }
    case 'USER_LOGIN':
      return { ...state, isLoginPending: true }
    case 'USER_LOGOUT':
      return { ...state, isAuthenticated: false }
    case 'USER_HANDLE_LOGIN':
      return { ...state, isLoginPending: false }
    case 'USER_LOGGED_IN':
      return {
        ...state,
        isAuthenticated: true,
        isLoginPending: false,
        profile: action.payload
      }
    case 'USER_LOGIN_ERROR':
      return { ...state, error: action.payload}
    default:
      return state
  }
}