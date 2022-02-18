import React from 'react';

const Reviewform = ({handleChange, handleSubmit, name, review}) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>Have an experience with {name}? Share your review!</div>
                <div className='field'>
                    <input onChange={handleChange} value={review.title} type="text" name='title' placeholder='Review Title' />
                </div>
                <div className='field'>
                    <input onChange={handleChange} value={review.description } type="text" name='description' placeholder='Review Description' />
                </div>
                <div className='field'>
                    <div className='rating-container' >
                        <div className='rating-title-text'>Rate This Airline</div>
                        [Star rating]
                    </div>
                </div>
                <button type='submit'>Submit Your Review</button>
            </form>
        </div>
    );
}

export default Reviewform;
