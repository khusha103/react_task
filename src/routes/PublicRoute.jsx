import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return !currentUser ? children : <Navigate to="/home" />;
};

export default PublicRoute;
