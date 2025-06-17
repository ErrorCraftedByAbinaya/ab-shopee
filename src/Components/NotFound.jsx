import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.code}>404</h1>
            <h2 style={styles.message}>Oops! Page Not Found</h2>
            <p style={styles.subtext}>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" style={styles.button}>Go to Home</Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '80px 20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
    button: {
        padding: '12px 24px',
        backgroundColor: '#0d6efd',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        transition: 'background 0.3s ease',
    },
};

export default NotFound;
