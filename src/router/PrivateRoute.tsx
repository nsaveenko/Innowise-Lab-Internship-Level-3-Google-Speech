import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import RoutesNav from '../utils/routesNav';

export default function PrivateRoute({ children }: any) {
  const { currentUserEmail } = useAuth();
  return currentUserEmail ? children : <Navigate to={RoutesNav.SIGNIN} />;
}
