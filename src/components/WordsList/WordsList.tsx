import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypeSelector';
import fetchWords from '../../store/actions/word';
import { IWord } from '../../types/word';
import WordItem from '../WordItem/WordItem';
import './WordsList.css';

const WordsList = () => {
  const { words, error, loading } = useTypedSelector((state) => state.word);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className='words-list'>
      {words?.slice(0, 10).map((word: IWord) => {
        return (
          <WordItem
            key={word.id}
            word={word.word}
            transcription={word.transcription}
            image={word.image}
          />
        );
      })}
    </div>
  );
};

export default WordsList;
