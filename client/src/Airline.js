import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Airline = () => {
    const [airline, setAirline] = useState([])
    const [review, setReview] = useState([])

    useEffect(() => {
        const url = `api/v1/airlines/${slug}` 

        axios.get(url)
        .then(r => console.log(r))
        .catch(r => console.log(r))        
    }, [])

    return (
        <div>
            This is the Airline Show View.
        </div>
    );
}

export default Airline;
