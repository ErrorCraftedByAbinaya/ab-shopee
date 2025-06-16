import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllProducts } from '../Features/productSlice';

const SearchModal = ({ show, handleClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const products = useSelector(selectAllProducts);
    const navigate = useNavigate();
    const modalContentRef = useRef(null); // Correct ref here

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
        handleClose();
        setSearchTerm('');
    };

    // 🔽 Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (show && modalContentRef.current && !modalContentRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show, handleClose]);

    return (
        <div
            className={`modal fade ${show ? 'show d-block' : ''}`}
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" ref={modalContentRef}>
                    <div className="modal-header">
                        <h5 className="modal-title">Search Products</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            className="form-control textarea"
                            placeholder="Search by product name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="mt-3">
                            {searchTerm && filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        onClick={() => handleProductClick(product.id)}
                                        style={{
                                            cursor: 'pointer',
                                            padding: '8px 0',
                                            borderBottom: '1px solid #ddd'
                                        }}
                                    >
                                        {product.title}
                                    </div>
                                ))
                            ) : (
                                searchTerm && <div>No products found.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
