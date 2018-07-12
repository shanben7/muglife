import React, { Component } from 'react';
import Add from './Add';
import styled from 'styled-components';

const NavBarDiv = styled.div`
    font-size: 1.5em;
`

class NavBar extends Component{
    constructor(props){
        super(props);
        //this.state = {};
    }
    render() {
        return (
            <NavBarDiv id="muglife-navbar" className="ui secondary menu">
                <a id="menuItem" className="active item">
                    Home
                </a>
                <div id="menuItem" className="right menu">
                    <Add id="menuItem" selectedMonth='All' selectedYear={2016} data={[]} />
                    <a id="menuItem" className="item">
                        About
                    </a>
                </div>
            </NavBarDiv>


        );
    }

}
export default NavBar;