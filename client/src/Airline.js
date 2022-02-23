import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from './Header';
import Reviewform from './ReviewForm';
import Review from './Review';

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
            console.log(data)
            })
        .catch(data => console.log(data))
    }, [params.slug])

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
        .then(r => r.json())
       .then(r => {
           const included = [...airline.included, r.data]
           console.log(included)
           setAirline({...airline, included})
           setReview({title: '', description: '', score: 0})
       })
    }

    const setRating = (score, e) => {
        setReview({...review, score})
    }

    let reviews
    if (airline.included) {
        reviews = airline.included.map((item, index) => {
            console.log('mapping:', item)
            return (
                <Review
                    key={index}
                    attributes={item} />
            )
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
                {reviews}    
            </div>  
            <div className='column'>
                {loaded &&
                <Reviewform 
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    setRating = {setRating}
                    name= {airline.attributes.name}
                    review = {review}
                />}
            </div>          
        </div>
    );
}

export default Airline;
