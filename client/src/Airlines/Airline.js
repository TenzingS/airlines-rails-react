import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../App.css';

const Airline = (props) => {
    return (
        <div className='card'>
            <div className='airlineLogo'>
                <img src={props.attributes.image_url}/>
            </div>  
            <div className='airlineName'>{props.attributes.name}</div>
            <div className='airline-score'>{props.attributes.avg_score}</div>  
            <div className='linkWrapper'>
                <Link to ={`/airlines/${props.attributes.slug}`} >View Airline</Link>
            </div>        
        </div>
    );
}

export default Airline;
