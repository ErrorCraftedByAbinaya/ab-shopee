import React from "react";
import Breadcrumb from "./Breadcrumb";
import { renderStars } from "./renderStars";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../Features/wishlistSlice";
import { addToCart } from "../Features/cartSlice";
import { Link } from "react-router-dom";

export default function Products({ products, category ,title}) {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);

    const isInWishlist = (id) => wishlist.some(item => item.id === id);

    const filteredProducts = category
        ? products.filter(product => product.category === category)
        : products;

    return (
        <div className="section-padding">
            {title ? <Breadcrumb category={title} />: category && <Breadcrumb category={category} />}
            <div className="container py-4 product-card">
                <h2 className="mb-4 text-center">
                    {title ? title : (category ? category.toUpperCase() : "All Products")}
                  
                </h2>

                <div className="row g-4 product-card">
                    {filteredProducts.map(product => (
                        <div className="col-12 col-md-4 col-lg-3" key={product.id}>
                            <div className="card shadow-sm position-relative h-100 d-flex flex-column justify-content-between">
                                <Link to={`/product/${product.id}` } className="d-flex justify-content-center align-items-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="img-fluid image"
                                    />
                                </Link>
                               

                                {/* Wishlist Button */}
                                <button
                                    className="position-absolute top-0 end-0 p-2 btn"
                                    onClick={() => dispatch(toggleWishlist(product))}
                                    style={{ background: 'none', border: 'none' }}
                                >
                                    {isInWishlist(product.id) ? '💖' : '🤍'}
                                </button>
                               
                                <Link to={`/product/${product.id}`}
                                    target="_blank" >
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title mb-0" style={{ fontSize: "16px" }}>
                                            {product.title.length > 45
                                                ? product.title.slice(0, 45) + "..."
                                                : product.title}
                                        </h5>
                                        <p className="card-text">Price : <strong>${product.price}</strong></p>
                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            <div className="rating">
                                                <span className="mb-2 text-sm"><small>Rating:<strong> {product.rating.rate}</strong></small> </span>
                                                <span className="stars">{renderStars(product.rating.rate)}</span>
                                            </div>
                                           
                                        </div>
                                     
                                    </div>
                                </Link>
                                <button
                                    className="btn btn-sm button link-effect mt-2"
                                    onClick={() => dispatch(addToCart(product))}
                                >
                                    <span data-text="🛒 Add to Cart" className="text-change">🛒 Add to Cart</span>
                                    
                                </button>
                            </div>
                        </div>
                    ))}

                    {filteredProducts.length === 0 && (
                        <p className="text-center">No products found in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
