import React, { useEffect, useState } from 'react';
import SoundIcon from '../../asserts/icons/SoundIcon/SoundIcon';
import { FILES_STORE_PATH } from '../../utils/constants';
import { IWord } from '../../types/word';
import { IWordItem } from './IWordItem';
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

  const wordItem: IWord = {
    word,
    audio: FILES_STORE_PATH + audio,
    image: FILES_STORE_PATH + image,
    wordTranslate: translation,
    transcription,
  };

  const [cls, setCls] = useState<string[]>(['word-item']);

  useEffect(() => {
    results.forEach((resultItem: any) => {
      if (resultItem.word === word && resultItem.isCorrect === true) {
        setCls([...cls, 'correct']);
      } else if (resultItem.word === word && resultItem.isCorrect === false) {
        setCls([...cls, 'incorrect']);
      }
    });
  }, [results]);

  return (
    <div
      role='button'
      tabIndex={0}
      onClick={() => handleWorldClick(wordItem)}
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
