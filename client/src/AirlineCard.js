import React from 'react';
import './App.css';
import { useState } from 'react';
import Airline from './Airline';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import reactRouterDom from 'react-router-dom';

function AirlineCard ({ name, image_url, avg_score, slug}) {

    return (
        <div className='card'>
            <div className='airlineLogo'>
                <img src={image_url}/>
            </div>  
            <div className='airlineName'>{name}</div>
            <div className='airline-score'>{avg_score}</div>  
            <div className='linkWrapper'>
                <Link to={`/airlines/${slug}`}>
                    View Airline
                </Link>
            </div>        
        </div>
    );
}

export default AirlineCard;
