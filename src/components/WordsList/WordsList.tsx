import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypeSelector';
import fetchWords from '../../store/actions/word';
import { IWord } from '../../types/word';
import WordItem from '../WordItem/WordItem';
import { IWordList } from './IWordList';
import './WordsList.css';

const WordsList = ({ page }: IWordList) => {
  const { words, error, loading } = useTypedSelector((state) => state.word);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords(page));
  }, []);

  useEffect(() => {
    dispatch(fetchWords(page));
  }, [page]);

  if (loading) {
    return <h1 className='info-message'>Loading...</h1>;
  }

  if (error) {
    toast.error(error);
  }

  return (
    <div className='words-list'>
      <Toaster position='top-right' />
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
