import React, { Component } from 'react';

class AddLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            location: '',
            discount: '',
            whatToBring: '',
            typeOfService: ''
        };
    }
    render() {
            return (

        <div id="new-location--modal" className="ui container main text container segment">
            <div className="index-scrollbox">
                <div className="ui huge header">Add a location</div>
                <form className="ui form">

                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder=""
                               value = { this.state.name }
                               onChange={event => this.setState({ name: event.target.value})}
                        />
                    </div>

                    <div className="field">
                        <label>Location</label>
                        <input type="text" name="location" placeholder=""
                               value = { this.state.location }
                               onChange={event => this.setState({ location: event.target.value})}
                        />
                    </div>

                    <div className="field">
                        <label>Discount</label>
                        <input type="number"
                               value = { this.state.discount }
                               onChange={event => this.setState({ discount: event.target.value})}
                        />
                    </div>

                    <div className="field">
                        <label>What to bring</label>
                        <input type="text"
                               value = { this.state.whatToBring }
                               onChange={event => this.setState({ whatToBring: event.target.value})}
                        />
                    </div>

                    <div className="field">
                        <label>Type of service</label>
                        <input type="number"
                               value = { this.state.typeOfService }
                               onChange={event => this.setState({ typeOfService: event.target.value})}
                        />
                    </div>

                    <input className="ui violet basic button" type="submit"/>
                </form>
            </div>
        </div>
        );
    }
}

export default AddLocation;