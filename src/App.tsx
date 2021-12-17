import React from 'react';
import Router from './router/Router';
import AuthProvider from '../src/contexts/AuthContext';

export default function App() {
  return (
    <div id='app'>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}
