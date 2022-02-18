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
            console.log(data.data)
            setLoaded(true)
            console.log(data.data.relationships)
            })
        .catch(data => console.log(data))
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('reviw:', review)
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        const airline_id = airline.data.id
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
