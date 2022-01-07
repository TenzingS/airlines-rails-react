import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Reviewform from './ReviewForm';

function Airline() {
    const slug = useParams();
    console.log(slug)
    // const [airline, setAirline] = useState({})
    // const [review, setReview] = useState({})
    // const [loaded, setLoaded] = useState(false)

     useEffect(() => {
        // axios.get(`api/v1/airlines/${slug}`)
        // .then(r => r.json())
        //  .then(r => {
        //      console.log(r)
        //   setAirline(r.data)
        //   setLoaded(true)
        //   })
        //  .catch(r => console.log(r))        
     }, [])

    return (
        <div className='Wrapper'> Airline
            {/* <div className='column' >
                { loaded && <Header 
              //  attributes = {airline.data.attributes} 
                />}
                <div className='reviews' ></div>
            </div>
            <div className='column' >
                <Reviewform 
                        handleChange ={handleChange} 
                        handleSubmit={handleSubmit} 
                        // attributes = {airline.data.attributes}
                        review={review}/>
            </div> */}
        </div>
    );
}

export default Airline;
