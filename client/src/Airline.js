import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from './Header';


const Airline = () => {
    const params = useParams();

    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const url = `/api/v1/airlines/${params.slug}`
        
        fetch(url)
        .then(r => r.json())
        .then(data => {
            setAirline(data.data)
            setLoaded(true)
            console.log(data.data.relationships)
            })
        .catch(data => console.log(data))
    }, [])

    return (
        <div className='wrapper'>
            <div className='column'>
                {console.log(airline.attributes)}
                {loaded && 
                <Header
                attr = {airline.attributes}
                reviews = {airline.relationships.reviews}
                />}
                <div className='reviews'></div>    
            </div>  
            <div className='column'>
                <div className='review-form'>Review Form</div>
            </div>          
        </div>
    );
}

export default Airline;
