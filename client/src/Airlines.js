import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AirlineCard from './AirlineCard';
import './App.css';

const Airlines = () => {

    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        axios.get('api/v1/airlines.json')
        .then( resp => setAirlines(resp.data.data))
        .catch( resp => console.log(resp))
    }, [airlines.length])

    const grid = airlines.map((airline, index) => {
        const {name, image_url, slug, avg_score } = airline.attributes
        return (<AirlineCard 
                    key={index}
                    name={name}
                    image_url={image_url}
                    slug={slug}
                    avg_score={avg_score}
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
