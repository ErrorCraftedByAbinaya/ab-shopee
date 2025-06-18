import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../Features/productSlice';
import Products from '../Components/Products';
import Loading from '../Components/Loading';
import ServerError from '../Components/ServerError';

export default function ProductList({ category }) {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProductsByCategory(category || 'all'));
    }, [dispatch, category]);
    useEffect(() => {
        const formattedTitle = category
            ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
            : 'All Products';
        document.title = formattedTitle;
    }, [category]);
    
    if (loading) return <div className='h-100'><Loading /></div>;
        if (error) return <ServerError/>;
   
    return (
        <div className="product-list">
            <Products products={items} category={category}/>
        </div>
    );
}
