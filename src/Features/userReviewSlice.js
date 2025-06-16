import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(),
        user: { username: 'Alice' },
        body: 'Great product! Really helped me a lot.',
        rating: 5,
        thumbsUp: 3,
        thumbsDown: 0,
    },
    {
        id: uuidv4(),
        user: { username: 'Bob' },
        body: 'It’s okay, could be better.',
        rating: 3,
        thumbsUp: 1,
        thumbsDown: 2,
    },
    {
        id: uuidv4(),
        user: { username: 'Charlie' },
        body: 'Absolutely love it! Highly recommended.',
        rating: 5,
        thumbsUp: 5,
        thumbsDown: 0,
    },
    {
        id: uuidv4(),
        user: { username: 'Diana' },
        body: 'Not worth the price in my opinion.',
        rating: 2,
        thumbsUp: 0,
        thumbsDown: 3,
    },
    {
        id: uuidv4(),
        user: { username: 'Ethan' },
        body: 'Fast delivery and good packaging.',
        rating: 4,
        thumbsUp: 2,
        thumbsDown: 0,
    },
    {
        id: uuidv4(),
        user: { username: 'Fiona' },
        body: 'Broke after a week of use.',
        rating: 1,
        thumbsUp: 0,
        thumbsDown: 4,
    },
    {
        id: uuidv4(),
        user: { username: 'George' },
        body: 'Product matches the description. Satisfied!',
        rating: 4,
        thumbsUp: 3,
        thumbsDown: 1,
    },
    {
        id: uuidv4(),
        user: { username: 'Hannah' },
        body: 'Customer service was very helpful.',
        rating: 5,
        thumbsUp: 4,
        thumbsDown: 0,
    },
    {
        id: uuidv4(),
        user: { username: 'Ian' },
        body: 'Received a defective item. Returned it.',
        rating: 2,
        thumbsUp: 1,
        thumbsDown: 2,
    },
    {
        id: uuidv4(),
        user: { username: 'Jenny' },
        body: 'Decent quality for the price.',
        rating: 4,
        thumbsUp: 2,
        thumbsDown: 1,
      },
];

const userReviewSlice = createSlice({
    name: 'userReviews',
    initialState,
    reducers: {
        addUserReview: (state, action) => {
            state.unshift(action.payload); // puts latest comment on top
        },
        toggleThumbsUp: (state, action) => {
            const review = state.find(r => r.id === action.payload);
            if (review) {
                review.thumbsUp = (review.thumbsUp || 0) + 1;
                if (review.thumbsDown > 0) review.thumbsDown -= 1;
            }
        },
        toggleThumbsDown: (state, action) => {
            const review = state.find(r => r.id === action.payload);
            if (review) {
                review.thumbsDown = (review.thumbsDown || 0) + 1;
                if (review.thumbsUp > 0) review.thumbsUp -= 1;
            }
        },
    },
});

export const { addUserReview, toggleThumbsUp, toggleThumbsDown } = userReviewSlice.actions;
export default userReviewSlice.reducer;
