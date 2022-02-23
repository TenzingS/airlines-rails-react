import React, {Fragment} from 'react';

const Reviewform = ({handleChange, handleSubmit, name, review, setRating}) => {

    const ratingOptions = [5,4,3,2,1].map((score, index) => {
        return (
            <Fragment key={score - 1}>
                <input type="radio" value={score} checked={review.score === score} name = "rating" onChange={() => console.log('selected:', score)} id={`rating - ${score}`} />
                <label onClick={(e) => setRating(score)}></label>
            </Fragment>
            )
    })

    return (
        <div className='review-wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='review-headline'>Have an experience with {name}? Share your review!</div>
                <div className='field'>
                    <input onChange={handleChange} value={review.title} type="text" name='title' placeholder='Review Title' />
                </div>
                <div className='field'>
                    <input onChange={handleChange} value={review.description } type="text" name='description' placeholder='Review Description' />
                </div>
                <div className='field'>
                    <div className='rating-container'>
                        <div className='rating-title-text'>Rate This Airline</div>
                        <div className='rating-box'>
                            {ratingOptions}
                        </div>
                    </div>
                </div>
                <button className='submitBtn' type='submit'>Submit Your Review</button>
            </form>
        </div>
    );
}

export default Reviewform;
