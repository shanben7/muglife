import { combineReducers } from 'redux'
import locations, { LOCATIONS_DEFAULT_STATE } from './locations'

const locationApp = combineReducers({
  locations
})

export const DEFAULT_STATE = {
  locations: LOCATIONS_DEFAULT_STATE
}

export default locationApp
