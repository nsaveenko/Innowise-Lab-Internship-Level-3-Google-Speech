import React from 'react';
import Router from './router/Router';
import AuthProvider from '../src/contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
