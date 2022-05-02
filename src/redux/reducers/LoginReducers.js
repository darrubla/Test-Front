/* eslint-disable default-param-last */
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAR_LOGIN,
} from '../constants'

const initialStateLoginWithEamil = {
  loginWithEmail: [],
  loginWithEmailSuccess: false,
  loginWithEmailFailed: false,
  loginWithEmailIsLoading: false,
  loginWithEmailError: '',
}

export const initialState = {
  ...initialStateLoginWithEamil,
}

const LoginReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_STARTED: {
      return {
        ...state,
        ...initialStateLoginWithEamil,
        loginWithEmailIsLoading: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        ...initialStateLoginWithEamil,
        loginWithEmail: payload,
        loginWithEmailSuccess: true,
        loginWithEmailIsLoading: false,
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        ...initialStateLoginWithEamil,
        loginWithEmailFailed: true,
        loginWithEmailIsLoading: false,
        loginWithEmailError: payload,
      }
    }
    case CLEAR_LOGIN: {
      return {
        ...state,
        ...initialStateLoginWithEamil,
      }
    }
    default:
      return state
  }
}

export default LoginReducer