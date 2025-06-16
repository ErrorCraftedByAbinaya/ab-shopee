import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserReview } from '../Features/userReviewSlice';
import { v4 as uuidv4 } from 'uuid';

export default function ReviewForm() {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!comment.trim() || rating === 0) {
            setError('❗Please provide both rating and comment.');
            return;
        }

        dispatch(addUserReview({
            id: uuidv4(),
            body: comment,
            user: { username: 'Guest' },
            rating,
            thumbsUp: 0,
            thumbsDown: 0,
            timestamp: Date.now(), // for sorting
        }));

        setComment('');
        setRating(0);
        setError('');
    };

    return (
        <div className='d-flex align-items-center justify-content-center reviews-form'>
            <form onSubmit={handleSubmit} className="mt-4 w-75 d-flex flex-column align-items-center justify-content-center">
                <h4 className='mb-1 form-title'>📝 Leave a Review</h4>
                {error && <p className="text-danger">{error}</p>}
                <div className="mb-4">
                    <span>Rating: </span>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setRating(star)}
                            style={{
                                cursor: 'pointer',
                                fontSize: '20px',
                                color: star <= rating ? '#ffc107' : '#e4e5e9',
                            }}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <textarea
                    className="form-control mb-4 textarea text-center"
                    rows="3"
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className="btn button link-effect" type="submit">
                    <span data-text="Post Comment" className="text-change">Post Comment</span>
                </button>
            </form>
        </div>
        
    );
}
