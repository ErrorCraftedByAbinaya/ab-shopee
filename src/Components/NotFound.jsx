import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={styles.container} className='d-flex flex-column align-items-center justify-content-center'>
            <h1 style={styles.code}>404</h1>
            <h2 style={styles.message}>Oops! Page Not Found</h2>
            <p style={styles.subtext}>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className='button link-effect'><span className='text-change' data-text="Go to Home">Go to Home</span></Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '80px 20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f8f9fa',
        minHeight: '70vh',
    },
    code: {
        fontSize: '6rem',
        color: '#dc3545',
        margin: 0,
    },
    message: {
        fontSize: '2rem',
        margin: '10px 0',
    },
    subtext: {
        fontSize: '1.1rem',
        marginBottom: '30px',
    },
 
};

export default NotFound;
