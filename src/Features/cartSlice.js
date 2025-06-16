// Features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
const loadCartFromLocalStorage = () => {
    try {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error("Failed to load cart from localStorage", e);
        return [];
    }
};
const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        console.error("Failed to save cart to localStorage", e);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: loadCartFromLocalStorage(),
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const exists = state.find(product => product.id === item.id);
            if (!exists) {
                state.push({ ...item, quantity: item.quantity || 1, count: 1 });
            } else {
                exists.quantity += item.quantity || 1;
                exists.count += 1;
            }
            saveCartToLocalStorage(state);
        },

        removeFromCart(state, action) {
            const updatedCart = state.filter(item => item.id !== action.payload);
            saveCartToLocalStorage(updatedCart);
            return updatedCart;
        },

        clearCart() {
            saveCartToLocalStorage([]);
            return [];
        },

        updateItemQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.find(i => i.id === id);
            if (item) item.quantity = quantity;
            saveCartToLocalStorage(state);
        }
        
      
    }
});

export const { addToCart, removeFromCart, clearCart, updateItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
