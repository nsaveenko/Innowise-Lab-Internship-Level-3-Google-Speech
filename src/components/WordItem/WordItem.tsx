import React from 'react';
import { IWordItem } from './IWordItem';
import SoundIcon from '../../asserts/icons/SoundIcon/SoundIcon';
import './WordItem.css';

const WordItem = ({
  word,
  translation,
  transcription,
  image,
  audio,
  handleWorldClick,
}: IWordItem) => {
  const handleKey = () => {
    return null;
  };

  return (
    <div
      role='button'
      tabIndex={0}
      onClick={() => handleWorldClick(image, audio, translation, word)}
      onKeyPress={handleKey}
      className='word-item'
    >
      <SoundIcon />
      <h3 className='word-item-title'>
        <span>{word}</span>
        <span>{transcription}</span>
      </h3>
    </div>
  );
};

export default WordItem;
