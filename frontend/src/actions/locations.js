// action types
export const ADD_LOCATION = 'ADD_LOCATION'
export const ADD_LOCATION_SUCCESS = 'ADD_LOCATION_SUCCESS'
export const LOCATIONS_FAILURE = 'LOCATIONS_FAILURE'
export const DELETE_LOCATION = 'DELETE_LOCATION'
export const LOADED_LOCATIONS = 'LOADED_LOCATIONS'
export const FETCH_LOCATIONS = 'FETCH_LOCATIONS'

// action creators
export function addLocation(location) {
  return { type: ADD_LOCATION, location }
}

export function addLocationSuccess(location) {
  return { type: ADD_LOCATION_SUCCESS, location }
}

export function locationsFailure(error) {
  return { type: LOCATIONS_FAILURE, error }
}

export function deleteLocation(id) {
  return { type: DELETE_LOCATION, id }
}

export function loadedLocations(locations) {
  return { type: LOADED_LOCATIONS, locations }
}

export function fetchLocations() {
  return { type: FETCH_LOCATIONS }
}
