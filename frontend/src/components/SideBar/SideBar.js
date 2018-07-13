import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './SideBar.css'
import AddLocation from "../../containers/AddLocation";

// TODO: Replace placeholder SideBar/NavBar, just using this for easy development.

class SideBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showModal: false
    };
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Menu noOverlay>
          <h1 style={{color: 'cornflowerBlue'}}>mugLife</h1>
          <h4 style={{textAlign: 'left'}}>serving up coffee
          <br/>one reusable mug at a time</h4>
          <a style={{color: 'cornflowerBlue'}} onClick={e => this.handleShow(e)} className="menu-item">Add Location</a>
        </Menu>
        <AddLocation isOpen={this.state.showModal} hide={() => this.handleClose()}/>
      </div>
    );
  }
}

export default SideBar;