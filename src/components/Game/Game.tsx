import React, { useState } from 'react';
import START_IMG_PATH from '../../utils/constants';
import Levels from '../Levels/Levels';
import WordsList from '../WordsList/WordsList';
import './Game.css';

const Game = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [imagePath] = useState<string>(START_IMG_PATH);

  return (
    <div className='wrapper'>
      <h2 className='level-title'>
        Current level:
        {activeLevel}
      </h2>
      <Levels setActiveLevel={setActiveLevel} />
      <img className='game-image' src={imagePath} alt='explanation of the word' />
      <WordsList />
    </div>
  );
};

export default Game;
