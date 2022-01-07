import React from 'react';

const Header = () => {
    return (
        <div className='wrapper'>
            <h1> <img src='' /> Airline Name </h1>
            <div>
                <div className='totalReviews'></div>
                <div className='starRating'></div>
                <div className='totalOutof'></div>
            </div>
        </div>
    );
}

export default Header;
