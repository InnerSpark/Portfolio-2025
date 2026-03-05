
import React from 'react';
import { Navigate } from 'react-router-dom';

const PasswordProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('hooverAuth') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/password-prompt" replace />;
  }

  return children;
};

export default PasswordProtectedRoute;
