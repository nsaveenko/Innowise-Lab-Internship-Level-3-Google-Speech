import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ERROR_MESSAGES } from '../../utils/messages';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const { currentUserEmail, signout } = useAuth();
  const [error, setError] = useState<string>('');

  function showStatistics() {
    navigate('/statistics');
  }

  async function handleLogOut() {
    setError('');

    try {
      await signout();
      navigate('/signin');
    } catch {
      setError(ERROR_MESSAGES.SIGN_OUT_MESSAGE);
    }
  }

  if (error !== '') {
    toast.error(error);
  }

  return (
    <div className='header'>
      <Toaster position='top-right' />
      <NavLink to='/' className='page-title'>Speakit</NavLink>
      <h3 className='email-title'>{currentUserEmail}</h3>
      <button
        className='primary-button header-button'
        type='button'
        onClick={showStatistics}
      >
        Score
      </button>
      <button
        className='primary-button header-button'
        type='submit'
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}
