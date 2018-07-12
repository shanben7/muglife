import { connect } from 'react-redux'
import { addLocation } from '../actions/locations';
import AddLocation from "../components/SideBar/AddLocation";

const mapStateToProps = (state) => {
  return {
    isSaving: state.locations.saving,
    error: state.locations.error
  }
};

const mapDispatchToProps = {
  addLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation)
