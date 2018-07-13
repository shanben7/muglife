import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import AddLocationForm from "./AddLocationForm";

// TODO: refactor to functional component

class AddLocation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal backdrop={false} show={this.props.isOpen} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new discount location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddLocationForm addLocation={this.props.addLocation} handleClose={this.props.hide}/>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddLocation;