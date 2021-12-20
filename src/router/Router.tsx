import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';
import Dashboard from '../pages/Dashboard/Dashboard';
import Statistics from '../pages/Statistics/Statistics';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={SignIn} />
        <PrivateRoute path='/' exact component={Dashboard} />
        <PrivateRoute path='/statistics' exact component={Statistics} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
