import React, { useEffect } from 'react';
import {
    FaTrash,
    FaPlus,
    FaMinus,
    FaShoppingCart,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaCcApplePay
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart, updateItemQuantity } from '../Features/cartSlice';
import Breadcrumb from '../Components/Breadcrumb';
import { Link } from 'react-router-dom';

const Cart = () => {
    useEffect(() => {
        document.title = 'Cart';  
      }, [])
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    // Update quantity
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        dispatch(updateItemQuantity({ id, quantity: newQuantity }));
    };

    const removeItem = id => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className='section-padding cart-page'>
            <Breadcrumb category='Cart' />
            <div className='container my-5'>
                <div className='d-flex align-items-center justify-content-between flex-wrap'>
                    <h2 className='mb-4'>
                        <FaShoppingCart className='me-2' />
                        Your Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                    </h2>
                    {cartItems.length !== 0 && ( <p className='underline-btn'><Link to='/'>Continue Shoping</Link></p>)}
                </div>
                

                {cartItems.length === 0 ? (
                    <div className='text-center py-5'>
                        <h4>Your cart is empty</h4>
                        <p className='text-muted'>Start shopping to add items to your cart</p>
                        <p className='underline-btn'><Link to='/'>Continue Shoping</Link></p>
                    </div>
                ) : (
                    <div className='row'>
                        {/* Cart Items */}
                        <div className='col-lg-8'>
                            <div className='card'>
                                <div className='card-body p-0'>
                                    <div className='table-responsive'>
                                        <table className='table mb-0'>
                                            <thead className='bg-light'>
                                                <tr>
                                                    <th scope='col' className='border-0'>
                                                        Product
                                                    </th>
                                                    <th scope='col' className='border-0'>
                                                        Price
                                                    </th>
                                                    <th scope='col' className='border-0'>
                                                        Quantity
                                                    </th>
                                                    <th scope='col' className='border-0'>
                                                        Total
                                                    </th>
                                                    <th scope='col' className='border-0'></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map(item => (
                                                    <tr key={item.id}>
                                                        <td className='align-middle'>
                                                            <div className='d-flex align-items-center'>
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                    className='img-fluid rounded me-3'
                                                                    width='60'
                                                                    height='50'
                                                                />
                                                                <div>
                                                                    <h6 className='mb-0'>{item.name}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className='align-middle'>${item.price.toFixed(2)}</td>
                                                        <td className='align-middle'>
                                                            <div className='d-flex align-items-center'>
                                                                <button
                                                                    className='btn btn-sm btn-outline-secondary'
                                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                >
                                                                    <FaMinus  className='mb-1'/>
                                                                </button>
                                                                <span className='mx-2'>{item.quantity}</span>
                                                                <button
                                                                    className='btn btn-sm btn-outline-secondary'
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                >
                                                                    <FaPlus className='mb-1' />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td className='align-middle'>
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </td>
                                                        <td className='align-middle'>
                                                            <button
                                                                className='btn btn-sm btn-outline-danger'
                                                                onClick={() => removeItem(item.id)}
                                                            >
                                                                <FaTrash />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-end mt-3'>
                                <button className='btn btn-outline-danger link-effect' onClick={() => dispatch(clearCart())}>
                                        <span data-text="Clear Cart" className='text-change'>Clear Cart</span>
                                </button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className='col-lg-4 mt-4 mt-lg-0'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title mb-3'>Order Summary</h5>

                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Subtotal:</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Shipping:</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <span>Tax (8%):</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>

                                    <hr />

                                    <div className='d-flex justify-content-between mb-3'>
                                        <strong>Total:</strong>
                                        <strong>${total.toFixed(2)}</strong>
                                    </div>

                                        <Link to='/checkout' className='button btn link-effect w-100 py-2'>
                                            <span data-text="Proceed to Checkout" className='text-change'> Proceed to Checkout</span>
                                    </Link>

                                    <div className='mt-3 text-center'>
                                        <div className='payment-icons'>
                                            <FaCcVisa className='mx-2' />
                                            <FaCcMastercard className='mx-2' />
                                            <FaCcPaypal className='mx-2' />
                                            <FaCcApplePay className='mx-2' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
