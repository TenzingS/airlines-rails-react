import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Airline from './Airline';
import '../App.css';

const Airlines = () => {

    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        axios.get('api/v1/airlines.json')
        .then( resp => setAirlines(resp.data.data))
        .catch( resp => console.log(resp))
    }, [airlines.length])

    const grid = airlines.map(item => {
        return (<Airline 
                    key={item.attributes.name}
                    attributes={item.attributes} />)
    })

    return (
        <div className='home'>
            <div className='header'>
                <h1>Open Flights</h1>
                <div className='subheader'>Honest reviews for Various Airlines</div>
            </div>
            <ul className='grid'>{grid}</ul>
        </div>
    );
}

export default Airlines;
