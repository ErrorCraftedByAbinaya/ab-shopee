import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Products from '../Components/Products';
import Breadcrumb from '../Components/Breadcrumb';

export default function Wishlists() {
    const wishlist = useSelector(state => state.wishlist);
    useEffect(() => {
        document.title = 'Wishlist';
    }, [])
    return (
            <Products products={wishlist} title={'Your Wishlist'}/>
    );
}
