import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

const Register = ({ inputs, authFields, uri, redirectto, loginroute }) => {
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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
    setSuccess('');

    const authData = {};
    authFields.forEach(field => {
      authData[field] = formValues[field];
    });

    try {
      const response = await axios.post(uri, authData);
      console.log('Registration Successful:', response.data);

      setSuccess('Registration successful! You can now log in.');
      navigate(redirectto);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Registration failed. Please try again.');
      }
      console.error('Registration Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
       <h1 className="auth-header">Create an Account</h1> 
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
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
          {loading ? 'Registering...' : 'Register'}
        </button>
        <p className="auth-link">
          Already have an account?{' '}
          <span onClick={() => navigate(loginroute)} className="link">
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
