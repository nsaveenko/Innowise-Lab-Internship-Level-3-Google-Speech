import React, { useState, useEffect } from 'react';
import { START_IMG_PATH } from '../../utils/constants';
import Levels from '../Levels/Levels';
import Recognition from '../Recognition/Recognition';
import WordsList from '../WordsList/WordsList';
import './Game.css';

export interface IResultItem {
  word: boolean;
}

const Game = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [word, setWord] = useState<string>('');
  const [imagePath, setImagePath] = useState<string>(START_IMG_PATH);
  const [audioPath, setAudioPath] = useState<string>();
  const song = new Audio(audioPath);
  const [result, setResult] = useState<IResultItem[]>([]);

  useEffect(() => {
    song.play();
  }, [audioPath]);

  useEffect(() => {
    console.log(result);
  }, [result]);

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
        setWord={setWord}
        song={song}
      />
      <Recognition word={word} result={result} setResult={setResult} />
    </div>
  );
};

export default Game;
