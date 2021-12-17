import React, { useState, useEffect } from 'react';
import { IWord } from '../../types/word';
import { START_IMG_PATH } from '../../utils/constants';
import Levels from '../Levels/Levels';
import Recognition from '../Recognition/Recognition';
import WordsList from '../WordsList/WordsList';
import './Game.css';

export interface IResultItem {
  word?: string;
  audioPath?: string;
  transcription?: string;
  isCorrect?: boolean;
}

const Game = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [word, setWord] = useState<IWord>({ word: '', audio: '', image: START_IMG_PATH, transcription: '' });
  const [results, setResult] = useState<IResultItem[]>([]);
  const song = new Audio(word.audio);

  useEffect(() => {
    song.play();
  }, [word]);

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
        src={word.image}
        alt='explanation of the word'
      />
      <WordsList
        results={results}
        page={activeLevel}
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
