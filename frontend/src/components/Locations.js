import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { connect } from 'react-redux'
import { addLocation, deleteLocation, fetchLocations } from '../actions/locations';

const Location = ({ location, id, onDelete, onToggle }) => (
  <div className="box location-item level is-mobile">
    <div className="level-left">
      <label className={"level-item location-description"}>
        <span>{location.name}</span>
      </label>
    </div>
    <div className="level-right">
      <a className="delete level-item" onClick={onDelete}>Delete</a>
    </div>
  </div>
)

class Locations extends Component {
  state = { newLocation: '' }

  componentDidMount() {
    this.props.fetchLocations()
  }

  addLocation (event) {
    event.preventDefault() // Prevent form from reloading page
    const { newLocation } = this.state

    if(newLocation) {
      const location = { name: newLocation }
      this.props.addLocation(location)
      this.setState({ newLocation: '' })
    }
  }

  render() {
    let { newLocation } = this.state
    const { locations, isLoading, isSaving, error, deleteLocation } = this.props

    return (
      <section className="section full-column">
        <h1 className="title white">Locations</h1>
        <div className="error">{error}</div>

        <form className="form" onSubmit={this.addLocation.bind(this)}>
          <div className="field has-addons" style={{ justifyContent: 'center' }}>
            <div className="control">
              <input className="input"
                     value={newLocation}
                     placeholder="New location"
                     onChange={(e) => this.setState({ newLocation: e.target.value })}/>
            </div>

            <div className="control">
              <button className={`button is-success ${(isLoading || isSaving) && "is-loading"}`}
                      disabled={isLoading || isSaving}>Add</button>
            </div>
          </div>
        </form>

        <div className="container location-list">
          {locations.map((location) => <Location key={location._id}
                                     id={location._id}
                                     location={location}
                                     onDelete={() => deleteLocation(location._id)}/> )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.items,
    isLoading: state.locations.loading,
    isSaving: state.locations.saving,
    error: state.locations.error
  }
}

const mapDispatchToProps = {
  addLocation,
  deleteLocation,
  fetchLocations
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)
