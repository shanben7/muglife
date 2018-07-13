import React, {Component} from 'react';
import {Button, Col, Form, FormControl, FormGroup, Modal} from "react-bootstrap";
import {LocationSearchInput} from "./LocationSearchInput";

class AddLocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  updateLocation(latLng) {
    this.setState({lat: latLng.lat, lng: latLng.lng});
  }

  handleChange(e, field) {
    this.setState({[field]: e.target.value});
  }

  handleSubmit() {
    const name = this.state.name;
    const lat = this.state.lat;
    const lng = this.state.lng;
    const discount = this.state.discount;
    this.props.addLocation({name, lat, lng, discount});
    this.props.handleClose();
  }

  // TODO: better copy for placeholder text
  render() {
    return <Form horizontal>
      <FormGroup>
        <Col sm={2}>Name</Col>
        <Col sm={10}>
          <FormControl
            type="text"
            placeholder="Enter a location name"
            value={this.state.name}
            onChange={e => this.handleChange(e, "name")}/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2}>Location</Col>
        <Col sm={10}><LocationSearchInput updateLocation={(latLng) => this.updateLocation(latLng)}/></Col>
      </FormGroup>

      <FormGroup>
        <Col sm={2}>Discount</Col>
        <Col sm={10}>
          <FormControl
            type="number"
            placeholder="Enter a location discount"
            step={0.01}
            value={this.state.discount}
            onChange={e => this.handleChange(e, "discount")}/>
        </Col>
      </FormGroup>
      <Modal.Footer>
        <Button bsStyle="primary" onClick={() => this.handleSubmit()}>Submit</Button>
      </Modal.Footer>
    </Form>
  }
}

export default AddLocationForm;