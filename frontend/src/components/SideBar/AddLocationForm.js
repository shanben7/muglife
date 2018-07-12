import React, {Component} from 'react';
import {Button, Col, Form, FormControl, FormGroup, Modal} from "react-bootstrap";

class AddLocationForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.name.value;
    const lat = this.lat.value;
    const lng = this.lng.value;
    const discount = this.discount.value;
    this.props.addLocation({ name, lat, lng, discount });
    this.props.handleClose();
  }

  renderFormGroup(fieldName, inputType, placeholderText, refName) {
    return (
      <FormGroup>
        <Col sm={2}>{fieldName}</Col>
        <Col sm={10}>
          <FormControl
            type={inputType}
            placeholder={placeholderText}
            step={inputType === "number" ? 0.000001 : 0}
            inputRef={ref => {this[refName] = ref}}/>
        </Col>
      </FormGroup>
    );
  }

  // TODO: better copy for placeholder text
  render() {
    return <Form horizontal onSubmit={e => this.handleSubmit(e)}>
      {this.renderFormGroup("Name", "text", "Enter a location name", "name")}
      {this.renderFormGroup("Latitude", "number", "Enter a location latitude", "lat")}
      {this.renderFormGroup("Longitude", "number", "Enter a location longitude", "lng")}
      {this.renderFormGroup("Discount", "number", "Enter a location discount", "discount")}
      <Modal.Footer>
        <Button bsStyle="primary" type="submit">Submit</Button>
      </Modal.Footer>
    </Form>
  }
}

export default AddLocationForm;