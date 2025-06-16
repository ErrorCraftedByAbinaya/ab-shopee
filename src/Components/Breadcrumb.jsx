import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ category }) {
    const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb d-flex justify-content-center align-items-center">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {capitalized}
                </li>
            </ol>
        </nav>
    );
}
