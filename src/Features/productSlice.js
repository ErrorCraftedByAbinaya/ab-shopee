import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchByCategory',
    async (category) => {
        const url =
            category === 'allProducts'
                ? 'https://fakestoreapi.com/products'
                : `https://fakestoreapi.com/products/category/${category}`;
        const response = await axios.get(url);
        return response.data;
    }
);
// productSlice.js
export const fetchProductById = createAsyncThunk(
    'products/fetchById',
    async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    }
);
  

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        selectedProduct: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearSelectedProduct(state) {
            state.selectedProduct = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // For single product
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.selectedProduct = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
  

export default productSlice.reducer;
export const { clearSelectedProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.products.items;
