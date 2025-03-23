import React, { useState } from 'react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Sign up with:', { email, password, agreeTerms });
    // Add registration logic here
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
    // Implement social login authentication logic here
  };

  const handleWalletConnect = () => {
    console.log('Connecting wallet...');
    // Implement wallet connection logic here
  };

  return (
    <div className="sign-up-container">
      <div className="auth-card">
        <div className="logo-container">
          <h1 className="logo">PredictX</h1>
        </div>
        
        <h2 className="auth-title">Create Your Account</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
              required
            />
            <div className="password-requirements">
              Must be at least 8 characters
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>
          
          <div className="terms-check">
            <input
              id="terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy</a>
            </label>
          </div>
          
          <button type="submit" className="auth-button" disabled={!agreeTerms}>Sign Up with Email</button>
        </form>
        
        <div className="separator">
          <span>or continue with</span>
        </div>
        
        <div className="social-buttons-grid">
          <button 
            className="social-button google-button"
            onClick={() => handleSocialSignUp('Google')}
          >
            <span className="social-icon">G</span>
            Google
          </button>
          
          <button 
            className="social-button apple-button"
            onClick={() => handleSocialSignUp('Apple')}
          >
            <span className="social-icon">A</span>
            Apple
          </button>
        </div>
        
        <div className="social-buttons-grid">
          <button 
            className="social-button twitter-button"
            onClick={() => handleSocialSignUp('Twitter')}
          >
            <span className="social-icon">X</span>
            Twitter
          </button>
          
          <button 
            className="social-button discord-button"
            onClick={() => handleSocialSignUp('Discord')}
          >
            <span className="social-icon">D</span>
            Discord
          </button>
        </div>
        
        <div className="separator">
          <span>or</span>
        </div>
        
        <button 
          className="social-button wallet-button"
          onClick={handleWalletConnect}
        >
          Connect Wallet
        </button>
        
        <div className="auth-switch">
          Already have an account? <a href="/signin">Sign In</a>
        </div>
      </div>
      
      <style jsx>{`
        .sign-up-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #11112A;
          padding: 20px;
        }
        
        .auth-card {
          background-color: #1A1A35;
          border-radius: 12px;
          padding: 30px;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .logo {
          color: #6E37FF;
          font-size: 28px;
          font-weight: bold;
          margin: 0;
        }
        
        .auth-title {
          text-align: center;
          color: #fff;
          font-size: 24px;
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          color: #B0B0C0;
          font-size: 14px;
          margin-bottom: 8px;
        }
        
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 12px 16px;
          background-color: #23233F;
          border: 1px solid #33335A;
          border-radius: 8px;
          color: #fff;
          font-size: 16px;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        
        input[type="email"]:focus,
        input[type="password"]:focus {
          border-color: #6E37FF;
          outline: none;
        }
        
        .password-requirements {
          color: #777789;
          font-size: 12px;
          margin-top: 8px;
        }
        
        .terms-check {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          color: #B0B0C0;
          font-size: 14px;
        }
        
        .terms-check input {
          margin-right: 8px;
          margin-top: 3px;
          accent-color: #6E37FF;
        }
        
        .terms-check a {
          color: #6E37FF;
          text-decoration: none;
        }
        
        .terms-check a:hover {
          text-decoration: underline;
        }
        
        .auth-button {
          width: 100%;
          padding: 14px;
          background-color: #6E37FF;
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s, opacity 0.2s;
        }
        
        .auth-button:hover:not(:disabled) {
          background-color: #5A2AE0;
        }
        
        .auth-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .separator {
          display: flex;
          align-items: center;
          text-align: center;
          color: #777789;
          margin: 24px 0;
        }
        
        .separator::before,
        .separator::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #33335A;
        }
        
        .separator span {
          padding: 0 10px;
        }
        
        .social-buttons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .social-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 12px;
          border: 1px solid #33335A;
          border-radius: 8px;
          background-color: #23233F;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .social-icon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          margin-right: 8px;
          font-size: 14px;
        }
        
        .google-button:hover, .apple-button:hover,
        .twitter-button:hover, .discord-button:hover {
          background-color: #2A2A4A;
        }
        
        .wallet-button {
          background-color: #23233F;
          margin-bottom: 10px;
        }
        
        .wallet-button:hover {
          background-color: #2A2A4A;
        }
        
        .auth-switch {
          text-align: center;
          margin-top: 24px;
          color: #B0B0C0;
          font-size: 14px;
        }
        
        .auth-switch a {
          color: #6E37FF;
          text-decoration: none;
          font-weight: 600;
        }
        
        .auth-switch a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;