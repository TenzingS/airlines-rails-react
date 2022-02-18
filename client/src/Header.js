import React from 'react';

const Header = ({attr, reviews}) => {
    const total = reviews.data.length

    return (
        <div className='wrapper-header'>
            <h1> <img src={attr.image_url} alt={attr.name} />{attr.name}</h1>
            <div>
                <div className='totalReviews'>{total} User Reviews</div>
                <div className='starRating'></div>
                <div className='totalOutof'>{attr.avg_score} out of 5</div>
            </div>
        </div>
    );
}

export default Header;
