import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AirlineCard from './AirlineCard';
import './App.css';

function Airlines() {

    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        axios.get('api/v1/airlines')
        .then( data => {
            setAirlines(data.data.data)})
    }, [])

    const grid = airlines.map((airline, index) => {
        return (<AirlineCard 
                    key={index}
                    name={airline.attributes.name}
                    image_url={airline.attributes.image_url}
                    slug={airline.attributes.slug}
                    avg_score={airline.attributes.avg_score}
                />)
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
