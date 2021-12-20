import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import customerReducer from './customerReducer'

export default combineReducers({
  auth,
  alert,
  customerReducer
})