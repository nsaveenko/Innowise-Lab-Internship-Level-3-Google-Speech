import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header/Header';
import './Dashboard.css';

export default function Dashboard() {
  const { currentUserEmail } = useAuth();

  return (
    <>
      <Header />
      <main className='main'>
        <div className='intro'>
          <h1 className='intro-title'>
            Hello,
            <span>{currentUserEmail}</span>
          </h1>
          <p className='intro-subtitle'>
            <span>Click on the words to hear them sound.</span>
            <span>Click on the button and speak the words into the microphone.</span>
          </p>
          <button className='primary-button' type='submit'>Start</button>
        </div>
      </main>
    </>
  );
}
