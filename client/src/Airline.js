import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Airline = () => {
    const params = useParams();

    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})

    useEffect(() => {
        console.log(params.slug)
        const url = `api/v1/airlines/${params.slug}`
        
        axios.get(url)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch( resp => console.log(resp))
    }, [])

    return (
        <div>
            <h3>Airline Show </h3>
        </div>
    );
}

export default Airline;
