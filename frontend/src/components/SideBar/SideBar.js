import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import {Button, Modal} from "react-bootstrap";
import './SideBar.css'

// TODO: Replace placeholder SideBar/NavBar, just using this for easy development.

class SideBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({ show: true });
  }

  render() {
    return (
      <div>

        <Menu noOverlay>
          <a id="home" className="menu-item">Home</a>
          <a onClick={e => this.handleShow(e)} className="menu-item">Add Location</a>
        </Menu>
        <Modal backdrop={false} show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SideBar;