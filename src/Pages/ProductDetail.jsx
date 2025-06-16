import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, clearSelectedProduct } from '../Features/productSlice';
import { renderStars } from '../Components/renderStars.jsx';
import ReviewForm from '../Components/ReviewForm.jsx';
import ReviewList from '../Components/ReviewList';
import { addToCart } from '../Features/cartSlice.js';
import { toggleWishlist } from '../Features/wishlistSlice.js';
import Loading from '../Components/Loading.jsx';
import ShippingRefund from '../Components/ShippingRefund.jsx';

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct: product, loading, error } = useSelector(state => state.products);
    const wishlist = useSelector(state => state.wishlist);

    const isInWishlist = (id) => wishlist.some(item => item.id === id);
    useEffect(() => {
        dispatch(fetchProductById(id));

        // optional cleanup
        return () => {
            dispatch(clearSelectedProduct());
        };
    }, [dispatch, id]);

    if (loading) return <Loading/>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Product not found.</p>;
    useEffect(() => {
        document.title = product.title;
    }, [])
    return (
        <>
            <div className='section-padding'>
                <div className="container py-4 ">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center position-relative">
                            <img src={product.image} alt={product.title} className="img-fluid" />
                            <button
                                className="border-0 bg-transparent position-absolute top-0 end-0 pe-4"
                                onClick={() => dispatch(toggleWishlist(product))}
                            >
                                {isInWishlist(product.id) ? '💖' : '🤍'}
                            </button>
                        </div>
                        <div className="col-md-6">
                            <h2 className='mb-3'>{product.title}</h2>
                            <p className='mb-2'>{product.description}</p>
                            <p className='mb-1'><strong>Price:</strong> ${product.price}</p>
                            <p className='mb-1'><strong>Category:</strong> {product.category}</p>
                            <p className='mb-3'>
                                <strong>Rating:</strong> {product.rating.rate}
                                <span className="ms-2">{renderStars(product.rating.rate)}</span>
                            </p>

                            <button
                                className="btn button link-effect"
                                onClick={() => dispatch(addToCart(product))}
                            >
                                <span data-text="🛒 Add to Cart" className="text-change">🛒 Add to Cart</span>
                                
                            </button>

                        </div>
                       
                    </div>
                </div>
            </div>
            <div className='section-padding'>
                <div className="container">
                    <div className='row'>
                        <div className="col-12">
                            <ReviewForm />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='section-padding'>
                <div className="container">
                    <div className='row'>
                        <div className="col-12">
                            <ReviewList />
                        </div>
                    </div>
                </div>
            </div>
            <ShippingRefund />

        </>
     
        
    );
}
