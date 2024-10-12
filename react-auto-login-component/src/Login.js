import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';  
import { useNavigate } from 'react-router-dom';

const Login = ({ inputs, authFields, uri, redirectto, registerroute }) => {
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const authData = {};
    authFields.forEach(field => {
      authData[field] = formValues[field];
    });

    try {
      const response = await axios.post(uri, authData);
      console.log('Login Successful:', response.data);
      navigate(redirectto);
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
       <h1 className="auth-header">Welcome Back!Login here!</h1> 
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p className="error-message">{error}</p>}
        {inputs.map((input, index) => (
          <div key={index} className="form-group">
            <label htmlFor={input}>{input.charAt(0).toUpperCase() + input.slice(1)}</label>
            <input
              type={input === 'password' ? 'password' : 'text'}
              id={input}
              name={input}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className="auth-link">
          Don't have an account?{' '}
          <span onClick={() => navigate(registerroute)} className="link">
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
