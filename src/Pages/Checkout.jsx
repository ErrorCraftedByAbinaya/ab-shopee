import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheckCircle, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Features/cartSlice';
import Breadcrumb from '../Components/Breadcrumb';

const Checkout = () => {
    useEffect(() => {
        document.title = 'Checkout';  
      }, [])
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        paymentMethod: 'visa',
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearCart());
        setShowSuccess(true);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className='section-padding position-relative'>
            <Breadcrumb category="Checkout" />

            {showSuccess && (
                <div className="success-overlay">
                    <div className="success-content">
                        <FaCheckCircle size={80} className="text-success mb-3" />
                        <h4>Order placed successfully!</h4>
                    </div>
                </div>
            )}

            <div className='container my-5'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        {/* Left: Shipping Form */}
                        <div className='col-md-7'>
                            <h3 className='mb-4'>Shipping Address</h3>
                            <div className="form-floating mb-3">
                                <input type='text' className='form-control' name='name' placeholder='Full Name' required onChange={handleChange} />
                                <label>Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type='text' className='form-control' name='address' placeholder='Address' required onChange={handleChange} />
                                <label>Address</label>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-floating mb-3">
                                        <input type='text' className='form-control' name='city' placeholder='City' required onChange={handleChange} />
                                        <label>City</label>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-floating mb-3">
                                        <input type='text' className='form-control' name='zip' placeholder='Zip Code' required onChange={handleChange} />
                                        <label>Zip Code</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating mb-4">
                                <input type='text' className='form-control' name='country' placeholder='Country' required onChange={handleChange} />
                                <label>Country</label>
                            </div>

                            <h4 className='mb-3'>Payment Method</h4>
                            <div className='d-flex flex-wrap gap-4'>
                                {['visa', 'mastercard', 'paypal', 'applepay'].map((method) => (
                                    <label key={method} className={`payment-method border rounded px-3 py-2 ${formData.paymentMethod === method ? 'border-dark' : 'border-secondary'}`}>
                                        <input
                                            type='radio'
                                            name='paymentMethod'
                                            value={method}
                                            checked={formData.paymentMethod === method}
                                            onChange={handleChange}
                                            className='me-2'
                                        />
                                        {method === 'visa' && <FaCcVisa size={28} />}
                                        {method === 'mastercard' && <FaCcMastercard size={28} />}
                                        {method === 'paypal' && <FaCcPaypal size={28} />}
                                        {method === 'applepay' && <FaCcApplePay size={28} />}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Right: Order Summary + Button */}
                        <div className='col-md-5 mt-5 mt-md-0'>
                            <div className='card shadow-sm mb-4'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Order Summary</h5>
                                    <div className='d-flex justify-content-between'>
                                        <span>Subtotal:</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <span>Shipping:</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <span>Tax (8%):</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-between fw-bold'>
                                        <span>Total:</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* ✅ Submit button here inside the form */}
                            <button className='link-effect button w-100' type='submit'>
                                <span className='text-change' data-text="Place Order">Place Order</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            {/* ✅ Styles */}
            <style jsx>{`
                .success-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }

                .success-content {
                    background: white;
                    padding: 40px;
                    border-radius: 10px;
                    text-align: center;
                    animation: popIn 0.3s ease-in-out;
                }

                @keyframes popIn {
                    0% { transform: scale(0.7); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }

                .payment-method {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                }

                .form-floating > label {
                    color: #6c757d;
                }

                input:focus {
                    outline: none;
                    box-shadow: none;
                }
            `}</style>
        </div>
    );
};

export default Checkout;
