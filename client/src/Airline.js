import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from './Header';
import Reviewform from './ReviewForm';

const Airline = () => {
    const params = useParams();

    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({title: '', description: ''})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const url = `/api/v1/airlines/${params.slug}`
        
        fetch(url)
        .then(r => r.json())
        .then(data => {
            setAirline(data.data)
            setLoaded(true)
            console.log(data.data)
            })
        .catch(data => console.log(data))
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review:', review)
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        
        fetch(`/api/v1/airlines/${params.slug}/reviews`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({review, airline_id: airline.id})
        })
       .then(resp => {
           const included = [...airline.included, resp.data]
           setAirline({...airline, included})
           setReview({title: '', description: '', score: 0})
       })
    }

    return (
        <div className='wrapper'>
            <div className='column'>
                {loaded && 
                <Header
                attr = {airline.attributes}
                reviews = {airline.relationships.reviews}
                />}
                <div className='reviews'></div>    
            </div>  
            <div className='column'>
                {loaded &&
                <Reviewform 
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    name= {airline.attributes.name}
                    review = {review}
                />}
            </div>          
        </div>
    );
}

export default Airline;
