import { createSlice } from '@reduxjs/toolkit';

// Utility to load from localStorage
const loadWishlistFromLocalStorage = () => {
    try {
        const stored = localStorage.getItem('wishlist');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error("Failed to load wishlist from localStorage", e);
        return [];
    }
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: loadWishlistFromLocalStorage(),
    reducers: {
        toggleWishlist(state, action) {
            const product = action.payload;
            const exists = state.find(p => p.id === product.id);
            let updatedWishlist;
            if (exists) {
                updatedWishlist = state.filter(p => p.id !== product.id);
            } else {
                updatedWishlist = [...state, product];
            }

            // Save updated state to localStorage
            try {
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            } catch (e) {
                console.error("Failed to save wishlist", e);
            }

            return updatedWishlist;
        }
    }
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
