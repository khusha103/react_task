import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles.css';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''           // Single state to manage both email and password
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,   
      [name]: value  
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/home');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Welcome Back</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
