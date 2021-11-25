import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ component, ...rest }: any) {
  const { currentUserEmail } = useAuth();
  const routeComponent = (props: any) => (
    currentUserEmail
      ? React.createElement(component, props)
      : <Redirect to={{ pathname: '/signin' }} />
  );
  return <Route {...rest} render={routeComponent} />;
}
