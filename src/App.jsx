import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1 className="title">Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1 className="title">Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site's features</p>
            <button className="hidden" onClick={handleLoginClick} id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello Friend!</h1>
            <p>Register with your personal details to use all of the site's features</p>
            <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
