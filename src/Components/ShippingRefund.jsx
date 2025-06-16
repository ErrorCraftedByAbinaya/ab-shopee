import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import {
    FaMoneyBillWave,
    FaSackDollar,
    FaStar,
    FaClock,
    FaTruckFast,
} from 'react-icons/fa6';

const features = [
    {
        icon: <FaTruckFast />,
        title: 'Free Delivery',
        text: 'Free Deliveries on all Orders. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
    },
    {
        icon: <FaMoneyBillWave />,
        title: 'Refund',
        text: 'Hassle-free refund process on all eligible orders. Customer satisfaction is our top priority.',
    },
    {
        icon: <FaSackDollar />,
        title: 'Buyers Protection',
        text: 'Secure payment. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
    },
    {
        icon: <FaStar />,
        title: 'Rated 4.9/5',
        text: 'On Google. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
    },
];

const ShippingRefund = () => {
    return (
        <section className="section-padding features-section">
            <div className="container">
                <div className="row gy-5">
                    {features.map((feature, index) => (
                        <div key={index} className="col-lg-3 col-md-6 col-12 text-center">
                            <article className={`feature-box wow fadeInUp ${index === features.length - 1 ? 'last-feature-box' : ''}`}>
                                <div className="box-header">{feature.icon}</div>
                                <h5 className="box-title">{feature.title}</h5>
                                <p className="box-text">{feature.text}</p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShippingRefund;
