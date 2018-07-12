import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import Add from './Add';
import Update from './Update';
import Delete from './Delete';
import AddLocation from './AddLocation';
import NavBar from '../../src/components/NavBar';
import Hero from './Hero'
import '../styles/index.css';
import MapContainer from "./MapContainer";

const HeroDiv = styled.div`
    background-color: #DADADA;
    height: 20em;
`

const Map = styled.div`
    text-align: center;
    height: 32em;
    width: 100%;
`

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {data: []};
        this.getData = this.getData.bind(this);
    }
    componentDidMount() {
        this.getData(this);
    }
    componentWillReceiveProps(nextProps) {
        this.getData(this);
    }
    getData(ev, year){
        axios.get('/getAll')
            .then(function(response) {
                ev.setState({data: response.data});
            });
    }
    render() {
        const stops = this.state.data;

        return (
            <div>
                <NavBar />
                <HeroDiv />
                <Map>
                    <MapContainer />
                </Map>
                <div>
                    <table>
                        <thead>
                        <tr><th></th><th className='desc-col'>Name</th><th className='button-col'>Lat</th><th className='button-col'>Long</th><th className='button-col'>Update</th><th className='button-col'>Delete</th></tr>
                        </thead>
                        <tbody>
                        {
                            this.state.data.map(function(exp){
                                return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.name}</td><td className='button-col'>{exp.lat}</td><td className='button-col'>{exp.lng}</td><td className='button-col'><Update expense={exp} /></td><td className='button-col'><Delete id={exp._id} expense={exp} /></td></tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <MapContainer stops={stops}/>
            </div>
        );
    }
}