import React from 'react';
import { Link } from 'react-router-dom';

export default function ServerError() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center text-center gap-3" style={{ minHeight: '70vh' }}>
            <h1>500 - Server Error</h1>
            <p>Oops! Something went wrong on our end.</p>
                       <Link to="/" className='button link-effect'><span className='text-change' data-text="Go to Home">Go to Home</span></Link>
           
        </div>
    );
}
