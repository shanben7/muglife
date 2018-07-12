import { connect } from 'react-redux'
import { addLocation, deleteLocation, fetchLocations } from '../actions/locations';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    locations: state.locations.items,
    isLoading: state.locations.loading,
    isSaving: state.locations.saving,
    error: state.locations.error
  }
};

const mapDispatchToProps = {
  addLocation,
  deleteLocation,
  fetchLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
