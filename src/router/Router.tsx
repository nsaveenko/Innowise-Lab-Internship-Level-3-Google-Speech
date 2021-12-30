import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import Dashboard from '../pages/Dashboard/Dashboard';
import Statistics from '../pages/Statistics/Statistics';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='/statistics' element={<PrivateRoute><Statistics /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
