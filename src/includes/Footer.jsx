import React from 'react';
import {
    FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
    FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay,
    FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaShoppingBag
} from 'react-icons/fa';
import { SiShopee } from 'react-icons/si';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer text-white pt-5 pb-3">
            <div className="container">
                <div className="row">
                    {/* Column 1 - About */}
                    <div className="col-md-3 mb-4">
                        <div className="d-flex align-items-center mb-3">
                            <SiShopee className="fs-2 AB-icon me-2" />
                            <h4 className="m-0">AB Shopee</h4>
                        </div>
                        <p className="text-white">
                            Your one-stop online shopping destination. Quality products at affordable prices.
                        </p>
                        <div className="social-icons mt-3">
                            <a href="#" className="text-white me-2"><FaFacebook /></a>
                            <a href="#" className="text-white me-2"><FaTwitter /></a>
                            <a href="#" className="text-white me-2"><FaInstagram /></a>
                            <a href="#" className="text-white"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Online Shoping</h5>
                        <ul className="list-unstyled">
                            {categories.map((cat) => (
                                <li key={cat.id} className="mb-2">  
                                <Link to={cat.url} className="text-white text-decoration-none">
                                    <span data-text={cat.name} className="text-change">{cat.name}</span>  
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Customer Service */}
                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Customer Service</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">FAQs</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Shipping Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Returns & Refunds</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Contact Us</h5>
                        <ul className="list-unstyled text-white">
                            <li className="mb-2 d-flex align-items-center">
                                <FaMapMarkerAlt className="me-2" />
                                <span>123 Shop Street, City, Country</span>
                            </li>
                            <li className="mb-2 d-flex align-items-center">
                                <FaPhoneAlt className="me-2" />
                                <span>+1 234 567 890</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <FaEnvelope className="me-2" />
                                <span>info@abshopee.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="row border-top border-3 border-secondary pt-3 mt-3">
                    <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                        <small className="text-white">
                            &copy; {new Date().getFullYear()} AB Shopee. All rights reserved.
                        </small>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="payment-icons">
                            <FaCcVisa className="mx-2" />
                            <FaCcMastercard className="mx-2" />
                            <FaCcPaypal className="mx-2" />
                            <FaCcApplePay className="mx-2" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;