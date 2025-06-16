import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (name.trim().length < 3) {
            setError('Name must be at least 3 characters long.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        if (password.length > 15) {
            setError('Password must be no more than 15 characters.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        alert('Registration successful!');
    };

    const handleGoogleRegister = () => {
        alert('Google Register clicked');
        // Add Google sign-up logic here
    };
useEffect(() => {
        document.title = 'Register';  
      }, [])
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Create Account</h2>

                {error && (
                    <div className="alert alert-danger text-center" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingName"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingName">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingConfirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>

                    <button type="submit" className="link-effect btn button w-100 mb-3">
                        <span className='text-change' data-text="Register">
                            Register
                        </span>
                    </button>

                    <div className="d-flex align-items-center my-3">
                        <hr className="flex-grow-1" />
                        <span className="mx-2 text-muted">OR</span>
                        <hr className="flex-grow-1" />
                    </div>

                    <button
                        type="button"
                        className="btn btn-light w-100 border d-flex align-items-center justify-content-center gap-2 mb-3"
                        onClick={handleGoogleRegister}
                    >
                        <img
                            src="/images/google-icon.png"
                            alt="Google"
                            style={{ width: '20px', height: '20px' }}
                        />
                        Register with Google
                    </button>

                    <div className="text-center">
                        Already have an account? <Link to="/login" className='underline-btn'>Login instead</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
