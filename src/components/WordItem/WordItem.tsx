import React, { useEffect, useState } from 'react';
import { IWordItem } from './IWordItem';
import SoundIcon from '../../asserts/icons/SoundIcon/SoundIcon';
import './WordItem.css';

const WordItem = ({
  results,
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

  const [cls, setCls] = useState<string[]>(['word-item']);

  useEffect(() => {
    results.forEach((resultItem: any) => {
      if (resultItem[word] === true) {
        setCls([...cls, 'correct']);
      } else if (resultItem[word] === false) {
        setCls([...cls, 'incorrect']);
      }
    });
  }, [results]);

  return (
    <div
      role='button'
      tabIndex={0}
      onClick={() => handleWorldClick(image, audio, translation, word)}
      onKeyPress={handleKey}
      className={cls.join(' ')}
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
