import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { ADD_LOCATION, DELETE_LOCATION, FETCH_LOCATIONS, loadedLocations, addLocationSuccess, locationsFailure } from '../actions/locations'

function* getAllLocations () {
  try {
    const res = yield call(fetch, '/locations')
    const locations = yield res.json()
    yield put(loadedLocations(locations))
  } catch (e) {
    yield put(locationsFailure(e.message))
  }
}

function* saveLocation (action) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(action.location),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    const res = yield call(fetch, '/locations', options)
    const location = yield res.json()
    yield put(addLocationSuccess(location))
  } catch (e) {
    yield put(locationsFailure(e.message))
  }
}

function* deleteLocation (action) {
  try {
    yield call(fetch, `/locations/${action.id}`, { method: 'DELETE' })
  } catch (e) {
    yield put(locationsFailure(e.message))
  }
}

function* updateLocation (action) {
  try {
    yield call(fetch, `/locations/${action.id}`, { method: 'PUT' })
  } catch (e) {
    yield put(locationsFailure(e.message))
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_LOCATIONS, getAllLocations)
  yield takeLatest(ADD_LOCATION, saveLocation);
  yield takeLatest(DELETE_LOCATION, deleteLocation);
}

export default rootSaga;
