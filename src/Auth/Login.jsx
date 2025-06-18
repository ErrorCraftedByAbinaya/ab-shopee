import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Simple email regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required.');
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

    setError('');
    alert('Login successful!');
  };

  const handleGoogleLogin = () => {
    alert('Google Login clicked');
    // Add Google Auth logic here
  };
  useEffect(() => {
          document.title = 'Login';  
        }, [])

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>

        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="link-effect btn button w-100 mb-3">
            <span className='text-change' data-text="  Login">Login</span>
          </button>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted">OR</span>
            <hr className="flex-grow-1" />
          </div>

          <button
            type="button"
            className="btn btn-light w-100 border d-flex align-items-center justify-content-center gap-2 mb-3"
            onClick={handleGoogleLogin}
          >
            <img
              src="images/google-icon.png"
              alt="Google"
              style={{ width: '20px', height: '20px' }}
            />
            Login with Google
          </button>

          <div className="text-center">
            Don’t have an account? <Link to="/register" className='underline-btn'>Create new account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
