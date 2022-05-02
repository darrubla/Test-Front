import { signInWithEmailAndPassword } from '../../services/firebase'
import {
  handleActionCatch,
  validateServerResponse,
} from '../../utils/errorUtils'
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAR_LOGIN,
} from '../constants'

export const LoginWithEmailStarted = () => ({
  type: LOGIN_STARTED,
})

export const LoginWithEmailSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const LoginWithEmailFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
})

export const ClearLogin = () => ({ type: CLEAR_LOGIN })

const LoginWithEmail = (email, password) => async (dispatch) => {
  dispatch(LoginWithEmailStarted())
  try {
    const result = signInWithEmailAndPassword(email, password)
    validateServerResponse(result)
    dispatch(LoginWithEmailSuccess(result.data))
  } catch (error) {
    handleActionCatch(error, dispatch, LoginWithEmailFailed, 'Login With Email')
  }
}

export default LoginWithEmail
