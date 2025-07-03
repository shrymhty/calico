import React, { useState, useEffect } from 'react'
import './Reviews.css'
import { assets, review_list } from '../../assets/assets';

const Reviews = () => {
    const [curr, setCurr] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurr((prev) => (prev + 1) % review_list.length);
        }, 3000); // 1 second

        return () => clearInterval(interval);
    }, []);

  return (
    <div className="reviews-carousel">
        <h2>What Our Customers Say</h2>
        <div className="wrapper">
            <div className="carousel-track" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {review_list.map((review, index) => (
                    <div className="review-card" key={index}>
                            <img src={review.avatar} className='review-avatar' />
                            <p className="review-text">"{review.text}"</p>
                            <p className="reviewer-name">- {review.name}</p>
                        </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Reviews