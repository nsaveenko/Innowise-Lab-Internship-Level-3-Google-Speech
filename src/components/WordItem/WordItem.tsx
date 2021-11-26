import React from 'react';
import { IWordItem } from './IWordItem';
import './WordItem.css';

const WordItem = ({ word, transcription }: IWordItem) => {
  return (
    <div role='button' className='word-item'>
      <h3 className='word-item-title'>
        <span>{word}</span>
        <span>{transcription}</span>
      </h3>
    </div>
  );
};

export default WordItem;
