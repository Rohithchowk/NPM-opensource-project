import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; 

const Register = ({ inputs, authFields }) => {
  const [formValues, setFormValues] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

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
      const response = await axios.post('http://localhost:5000/api/register', authData);
      console.log('Registration Successful:', response.data);
      setSuccess('Registration successful! You can now log in.');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
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
      </form>
    </div>
  );
};

export default Register;
