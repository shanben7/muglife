import React from 'react'
import PropTypes from 'prop-types'
import herb from '../assets/herb.png';
import {Label} from 'react-bootstrap';
import styled from 'styled-components';

const Div = styled.div`
 display: flex;
  justify-content: space-between;
`;

class Info extends React.Component {

  // TODO: add func for updating location likes

  render() {
    return (
      <div>
        <h5>{this.props.name}</h5>
        <p>discount: ${this.props.discount}</p>
        <Div>
          <div><img src={herb} width={20} height={20}/>5</div>
          {/*TODO: put upvotes in model and increase onclick herb */}
          <div><Label bsStyle="info" size="xxs">verified</Label></div>
        </Div>
      </div>
    );
  }
}

export default Info;

Info.propTypes = {
  name: PropTypes.string,
  discount: PropTypes.number
};