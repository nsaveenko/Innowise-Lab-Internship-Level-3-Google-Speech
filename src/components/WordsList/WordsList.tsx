import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypeSelector';
import { fetchWords } from '../../store/actions/wordsAction';
import { IWord } from '../../types/word';
import WordItem from '../WordItem/WordItem';
import { IWordList } from './IWordList';
import './WordsList.css';
import { IWordItem } from '../WordItem/IWordItem';

const WordsList = ({ results, page, setWord }: IWordList) => {
  const { words, error, loading } = useTypedSelector((state) => state.wordReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords(1));
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

  const handleWorldClick = (word: IWordItem) => {
    setWord(word);
    if (word.translation) {
      toast(word.translation);
    }
  };

  return (
    <div className='words-list'>
      <Toaster position='top-right' />
      {words?.slice(0, 10).map((word: IWord) => {
        return (
          <WordItem
            key={word.id}
            results={results}
            word={word.word}
            transcription={word.transcription}
            image={word.image}
            audio={word.audio}
            translation={word.wordTranslate}
            handleWorldClick={handleWorldClick}
          />
        );
      })}
    </div>
  );
};

export default WordsList;
