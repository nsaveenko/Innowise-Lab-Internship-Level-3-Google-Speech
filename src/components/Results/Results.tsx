import React, { useState, useEffect } from 'react';
import SoundIcon from '../../asserts/icons/SoundIcon/SoundIcon';
import { IResultItem } from '../Game/Game';
import { IResult } from './IResults';
import './Results.css';

const Results = ({ results }: IResult) => {
  const correctWords: any = results
    .filter((result: IResultItem) => result.isCorrect === true);
  const incorrectWords: any = results
    .filter((result: IResultItem) => result.isCorrect === false);
  const [currWord, setCurrWord] = useState<IResultItem>();
  const song = new Audio(currWord?.audioPath);

  useEffect(() => {
    song.play();
  }, [currWord]);

  return (
    <div className='results-container'>
      <div className='result-header'>
        <h3 className='result-title'>Mistakes</h3>
        <p className='count-title count-title-incorrect'>{incorrectWords.length}</p>
      </div>
      <div className='result-words-list'>
        {incorrectWords
          .map((result: IResultItem) => {
            return (
              <div
                role='button'
                tabIndex={0}
                onClick={() => setCurrWord(result)}
                onKeyPress={() => null}
                className='word-title'
              >
                <SoundIcon />
                <h5>{result.word}</h5>
                {result.transcription}
              </div>
            );
          })}
      </div>
      <div className='result-header'>
        <h3 className='result-title'>Right</h3>
        <p className='count-title count-title-correct'>{correctWords.length}</p>
      </div>
      <div className='result-words-list'>
        {correctWords
          .map((result: IResultItem) => {
            return (
              <div
                role='button'
                tabIndex={0}
                onClick={() => setCurrWord(result)}
                onKeyPress={() => null}
                className='word-title'
              >
                <SoundIcon />
                <h5>{result.word}</h5>
                {result.transcription}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Results;
