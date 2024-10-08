import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="container">
      <h2>Welcome, {user.name}!</h2>
      <p>You've successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;