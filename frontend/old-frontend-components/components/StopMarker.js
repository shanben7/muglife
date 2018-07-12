import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import styled from 'styled-components';

const Marker = styled.div`
    display: inline-block;
    white-space: nowrap;
    animation-name: bounce;
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
`

const MarkerIcon = styled.img`
    height: 30px;
    width: 30px;
    cursor: pointer !important;
`

class StopMarker extends Component {

    render() {

        const popoverTop = (
            <Popover id="popover-positioned-top" title={this.props.name}>
                <strong>Bring your mugs here!</strong>
                <p>Discount: {this.props.discount}</p>
                <p>Discount: ${parseFloat(Math.round(this.props.discount * 100) / 100).toFixed(2)}</p>
            </Popover>
        );

        return (
            <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                <Marker>
                    {this.props.name}
                    <div>
                        <MarkerIcon src="http://simpleicon.com/wp-content/uploads/map-marker-13.png" />
                    </div>
                </Marker>
            </OverlayTrigger>
        );
    }
}

export default StopMarker;

StopMarker.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};
