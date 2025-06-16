// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Features/productSlice';
import wishlistReducer from '../Features/wishlistSlice';
import cartReducer from '../Features/cartSlice';
import userReviewReducer from '../Features/userReviewSlice';

const store = configureStore({
    reducer: {
        products: productReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        userReviews: userReviewReducer,
    }
    
});

export default store;
