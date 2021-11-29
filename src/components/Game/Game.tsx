import React, { useState, useEffect } from 'react';
import { START_IMG_PATH } from '../../utils/constants';
import Levels from '../Levels/Levels';
import Recorder from '../Recorder/Recorder';
import WordsList from '../WordsList/WordsList';
import './Game.css';

const Game = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [imagePath, setImagePath] = useState<string>(START_IMG_PATH);
  const [audioPath, setAudioPath] = useState<string>();
  const song = new Audio(audioPath);

  useEffect(() => {
    song.play();
  }, [audioPath]);

  return (
    <div className='wrapper'>
      <h2 className='level-title'>
        Current level:
        {activeLevel}
      </h2>
      <Levels setActiveLevel={setActiveLevel} />
      <img
        className='game-image'
        src={imagePath}
        alt='explanation of the word'
      />
      <WordsList
        page={activeLevel}
        setImagePath={setImagePath}
        setAudioPath={setAudioPath}
        song={song}
      />
      <Recorder />
    </div>
  );
};

export default Game;
