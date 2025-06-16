import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleThumbsUp, toggleThumbsDown } from '../Features/userReviewSlice';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ReviewList() {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.userReviews);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} style={{ color: i < rating ? '#ffc107' : '#e4e5e9' }}>★</span>
        ));
    };

    return (
        <div className="container">
            <div className='row'>
                <h5 className='mb-4'>💬 User Reviews</h5>

            </div>
            <div className='row justify-content-between'>
                {comments.length === 0 && <p>No reviews yet.</p>}
                {comments.map(comment => (
                    <div key={comment.id} className="col-lg-6 col-12">
                        <div className="card mb-3 p-3 shadow-sm">
                            <div className="d-flex justify-content-between">
                                <strong>{comment.user.username}</strong>
                                <span>{renderStars(comment.rating || 0)}</span>
                            </div>
                            <p className="mb-1">{comment.body}</p>
                            <div className="mt-2">
                                <button
                                    className={`btn btn-sm me-2`}
                                    onClick={() => dispatch(toggleThumbsUp(comment.id))}
                                >
                                    <FontAwesomeIcon icon={faThumbsUp} className={`${comment.thumbsUp ? 'primary' : ''}`} /> {comment.thumbsUp}
                                </button>
                                <button
                                    className={`btn btn-sm `}
                                    onClick={() => dispatch(toggleThumbsDown(comment.id))}
                                >
                                    <FontAwesomeIcon icon={faThumbsDown} className={`${comment.thumbsDown ? 'primary' : ''}`}/> {comment.thumbsDown}
                                </button>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
            
        </div>
    );
}
