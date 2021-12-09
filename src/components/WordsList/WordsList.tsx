import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypeSelector';
import { FILES_STORE_PATH } from '../../utils/constants';
import fetchWords from '../../store/actions/word';
import { IWord } from '../../types/word';
import WordItem from '../WordItem/WordItem';
import { IWordList } from './IWordList';
import './WordsList.css';

const WordsList = ({ results, page, setImagePath, setAudioPath, setWord }: IWordList) => {
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

  const handleWorldClick = (image: string, audio: string, translation: string, word: string) => {
    setImagePath(FILES_STORE_PATH + image);
    setAudioPath(FILES_STORE_PATH + audio);
    setWord(word);
    toast(translation);
  };

  return (
    <div className='words-list'>
      <Toaster position='top-right' />
      {words?.slice(0, 10).map((word: IWord) => {
        return (
          <WordItem
            results={results}
            key={word.id}
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
