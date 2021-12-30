import React, { FC, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { ERROR_MESSAGES } from '../../utils/messages';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';
import Routes from '../../utils/routesNav';

const SignIn: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signin } = useAuth();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await signin(email, password);
      navigate(Routes.DASHBOARD);
    } catch {
      toast.error(ERROR_MESSAGES.SIGN_IN_MESSAGE);
    }
  }

  return (
    <main className='main'>
      <div className='intro'>
        <h2 className='auth-title'>Sign In</h2>
        <Toaster position='top-right' />
        <form className='auth-form' onSubmit={handleSubmit}>
          <div className='auth-input-container'>
            <h3 className='input-title'>Email</h3>
            <input
              className='auth-input'
              type='email'
              autoComplete='on'
              onChange={handleChangeEmail}
              value={email}
              required
            />
          </div>
          <div className='auth-input-container'>
            <h3 className='input-title'>Password</h3>
            <input
              className='auth-input'
              type='password'
              autoComplete='on'
              onChange={handleChangePassword}
              value={password}
              required
            />
          </div>
          <div className='auth-input-container'>
            <input className='primary-button' type='submit' value='Sign In' />
          </div>
        </form>
        <h2 className='auth-info'>
          Do not have an account yet?
          <NavLink to={Routes.SIGNUP} className='link'>
            Register now
          </NavLink>
        </h2>
      </div>
    </main>
  );
};

export default SignIn;
