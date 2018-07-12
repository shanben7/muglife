import { connect } from 'react-redux'
import { fetchLocations } from '../actions/locations';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
    locations: state.locations.items,
  }
};

const mapDispatchToProps = {
  fetchLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
