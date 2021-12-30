import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Intro from '../../components/Intro/Intro';
import Game from '../../components/Game/Game';
import './Dashboard.css';

export default function Dashboard() {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <>
      <Header />
      <main className='main'>
        { isStarted ? <Game /> : <Intro handleStart={handleStart} /> }
      </main>
    </>
  );
}
