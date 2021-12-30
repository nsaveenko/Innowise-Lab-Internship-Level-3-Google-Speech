import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import Dashboard from '../pages/Dashboard/Dashboard';
import Statistics from '../pages/Statistics/Statistics';
import RoutesNav from '../utils/routesNav';


const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesNav.SIGNUP} element={<SignUp />} />
        <Route path={RoutesNav.SIGNIN} element={<SignIn />} />
        <Route path={RoutesNav.DASHBOARD} element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path={RoutesNav.STATISTICS} element={<PrivateRoute><Statistics /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
