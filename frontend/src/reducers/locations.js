import {
  ADD_LOCATION,
  ADD_LOCATION_SUCCESS,
  LOCATIONS_FAILURE,
  DELETE_LOCATION,
  LOADED_LOCATIONS,
  FETCH_LOCATIONS
} from '../actions/locations'

export const LOCATIONS_DEFAULT_STATE = {
  loading: false,
  saving: false,
  error: '',
  items: []
}

export default function locations (state = LOCATIONS_DEFAULT_STATE, action) {
  switch (action.type) {
    case LOADED_LOCATIONS:
      return {...state, items: action.locations, loading: false}

    case FETCH_LOCATIONS: {
      return {...state, loading: true}
    }

    case ADD_LOCATION:
      return {...state, saving: true}

    case ADD_LOCATION_SUCCESS:
      return {
        ...state,
        items: state.items.concat(action.location),
        saving: false
      }

    case LOCATIONS_FAILURE:
      return {...state, loading: false, saving: false, error: action.error}

    case DELETE_LOCATION:
      return {
        ...state,
        items: state.items.reduce((items, location) =>
          location._id !== action.id ? items.concat(location) : items, []
        )
      }

    default:
      return state
  }
}
