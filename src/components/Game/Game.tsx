import React, { useState, useEffect } from 'react';
import { START_IMG_PATH } from '../../utils/constants';
import Levels from '../Levels/Levels';
import Recognition from '../Recognition/Recognition';
import WordsList from '../WordsList/WordsList';
import './Game.css';

export interface IResultItem {
  word: string;
  isCorrect: boolean;
}

const Game = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [word, setWord] = useState<string>('');
  const [imagePath, setImagePath] = useState<string>(START_IMG_PATH);
  const [audioPath, setAudioPath] = useState<string>();
  const [results, setResult] = useState<IResultItem[]>([]);
  const song = new Audio(audioPath);

  useEffect(() => {
    song.play();
  }, [audioPath]);

  useEffect(() => {
    console.log('game comp', results);
  }, [results]);

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
        results={results}
        page={activeLevel}
        setImagePath={setImagePath}
        setAudioPath={setAudioPath}
        setWord={setWord}
        song={song}
      />
      <Recognition
        activeLevel={activeLevel}
        word={word}
        results={results}
        setResult={setResult}
      />
    </div>
  );
};

export default Game;
