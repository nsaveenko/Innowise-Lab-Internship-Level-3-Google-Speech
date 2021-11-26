import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { IIntro } from './IIntro';

export default function Intro({ handleStart }: IIntro) {
  const { currentUserEmail } = useAuth();

  return (
    <div className='intro'>
      <h1 className='intro-title'>
        Hello,
        <span>{currentUserEmail}</span>
      </h1>
      <p className='intro-subtitle'>
        <span>Click on the words to hear them sound.</span>
        <span>Click on the button and speak the words into the microphone.</span>
      </p>
      <button onClick={handleStart} className='primary-button' type='submit'>Start</button>
    </div>
  );
}
