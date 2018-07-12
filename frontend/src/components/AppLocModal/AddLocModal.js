import React, {Component} from 'react';
import {Button, Col, Form, FormControl, FormGroup, Modal} from 'react-bootstrap';
import 'app-loc-modal.css';

class AddLocModal extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {show: false};
  }

  handleClose() {
    this.setState({...this.state, show: false});
  }

  handleShow() {
    this.setState({...this.state, show: true});
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.name.value;
    const discount = this.discount.value;
    this.props.addLocation({name, discount});
    this.handleClose();
  }

  render() {
    return (
      <Modal className="article-modal" show={this.state.show} onHide={this.handleClose}>
        <Form horizontal onSubmit={e => this.handleSubmit(e)}>
          <Modal.Header closeButton>
            <Modal.Title>Add a location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="locationName">
              <Col sm={2}>
                Location Name
              </Col>
              <Col sm={10}>
                <FormControl
                  type="text"
                  placeholder="Enter the name of the location"
                  inputRef={ref => {
                    this.name = ref
                  }}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="locationDiscount">
              <Col sm={2}>
                Body
              </Col>
              <Col sm={10}>
                <FormControl
                  componentClass="textarea"
                  placeholder="Enter the discount amount here"
                  inputRef={ref => {
                    this.discount = ref
                  }}
                />
              </Col>
            </FormGroup>


          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" type="submit">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

