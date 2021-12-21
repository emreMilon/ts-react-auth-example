import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import customerReducer from './customerReducer'
import userReducer from './userReducer'
import forecast from "./forecastReducer"

export default combineReducers({
  auth,
  alert,
  customerReducer,
  userReducer,
  forecast
})