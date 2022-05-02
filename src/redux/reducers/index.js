import { combineReducers } from 'redux'

import Filter from './FilterReducers'
import Home from './HomeReducers'
import Login from './LoginReducers'

export default combineReducers({
  Filter,
  Home,
  Login,
})
