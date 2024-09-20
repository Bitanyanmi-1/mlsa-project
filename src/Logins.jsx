import "./Forms.css";
import { useState } from 'react';

/**
 * Forms component that toggles between login and sign-up forms.
 *
 * @component
 * @example
 * return (
 *   <Forms />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @function
 * @name Forms
 *
 * @description
 * This component maintains a state to toggle between login and sign-up forms.
 * It provides input fields for username, password, and email (for sign-up).
 * The component also includes buttons to submit the forms and links to toggle between the forms.
 *
 * @property {boolean} isLogin - State to determine whether to show the login form or the sign-up form.
 * @property {function} setIsLogin - Function to update the isLogin state.
 * @property {function} toggleForm - Function to toggle between login and sign-up forms.
 * @property {function} login - Function to handle login logic.
 * @property {function} signUp - Function to handle sign-up logic.
 */
function Forms() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = (form) => {
    setIsLogin(form === 'login');
  };

  const login = () => {
    // Implement login logic here
  };

  const signUp = () => {
    // Implement sign-up logic here
  };

  return (
    <div>
      <header className="header">
      </header>
      {isLogin ? (
        <div id="login-form">
          <h2 className="frm_header">LMS Login</h2>
          <input type="text" id="login-username" placeholder="Username" required />
          <input type="password" id="login-password" placeholder="Password" required />
          <button onClick={login}>Login</button>
          <span className="toggle-link" onClick={() => toggleForm('signup')}>New user? Sign Up here</span>
        </div>
      ) : (
        <div id="signup-form">
          <h2>Sign Up</h2>
          <input type="text" id="signup-username" placeholder="Username" required />
          <input type="email" id="signup-email" placeholder="Email" required />
          <input type="password" id="signup-password" placeholder="Password" required />
          <button onClick={signUp}>Sign Up</button>
          <span className="toggle-link" onClick={() => toggleForm('login')}>Already have an account? Login here</span>
        </div>
      )}
    </div>
  );
}

export default Forms;