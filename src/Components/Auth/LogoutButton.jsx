import React from 'react';
import { useAuth } from '../../config/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      alert('Logged out successfully!');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
