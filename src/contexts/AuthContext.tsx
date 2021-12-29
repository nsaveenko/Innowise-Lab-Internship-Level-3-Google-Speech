import React, { FC, useContext, useEffect, useState } from 'react';
import { auth } from '../api/index';

export interface IAuthContext {
  signin?: any;
  signup?: any;
  signout?: any;
  currentUserEmail?: string;
}

const AuthContext = React.createContext<IAuthContext>({});

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

const AuthProvider: FC = ({ children }) => {
  const [currentUserEmail, setCurrentUserEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUserEmail(user?.email || '');
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: IAuthContext = {
    signin,
    signup,
    signout,
    currentUserEmail,
  };

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
