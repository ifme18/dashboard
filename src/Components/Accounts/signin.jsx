// SignInPage.jsx
import React, { useState } from 'react';
import './signin.css';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Sign in attempted:', formData);
  };

  return (
    <div className="sign-in-page">
      <div className="background-overlay"></div>
      <div className="form-container">
        <div className="form-header">
          <div className="logo">PredictX</div>
          <h2 className="form-title">Sign In</h2>
          <p className="form-subtitle">
            Welcome back to your prediction market platform
          </p>
        </div>

        <form onSubmit={handleSubmit} className="sign-in-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>

        <div className="form-footer">
          <p>
            Don't have an account? <a href="#">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;