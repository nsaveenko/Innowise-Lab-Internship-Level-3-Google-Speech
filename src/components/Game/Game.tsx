/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-modal';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addStatistics } from '../../store/actions/statistics';
import { useAuth } from '../../contexts/AuthContext';
import { IWord } from '../../types/word';
import { START_IMG_PATH, MULTIPLIER } from '../../utils/constants';
import Levels from '../Levels/Levels';
import Recognition from '../Recognition/Recognition';
import WordsList from '../WordsList/WordsList';
import Results from '../Results/Results';
import modalStyles from '../../utils/styles';
import './Game.css';

export interface IResultItem {
  word?: string;
  audioPath?: string;
  transcription?: string;
  isCorrect?: boolean;
}

const Game = () => {
  const dispatch = useDispatch();
  const { currentUserEmail } = useAuth();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [activeLevel, setActiveLevel] = useState<number>(1);
  const [word, setWord] = useState<IWord>({ word: '', audio: '', image: START_IMG_PATH, transcription: '' });
  const [results, setResult] = useState<IResultItem[]>([]);
  const correctWords: IResultItem[] = results
    .filter((result: IResultItem) => result.isCorrect === true);
  const incorrectWords: IResultItem[] = results
    .filter((result: IResultItem) => result.isCorrect === false);
  const song = new Audio(word.audio);

  Modal.setAppElement('#app');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    dispatch(addStatistics({
      id: uuidv4(),
      email: currentUserEmail || '',
      countOfCorrectAnswers: correctWords.length,
      countOfIncorrectAnswers: incorrectWords.length,
      level: activeLevel,
      date: moment().format('LLLL'),
      score: Math.round(correctWords.length * MULTIPLIER[activeLevel - 1]),
    }));
    setResult([]);
  }

  useEffect(() => {
    if (word.audio) {
      song.play();
    }
    if (word.wordTranslate) {
      toast(word.wordTranslate);
    }
  }, [word]);

  useEffect(() => {
    if (results.length >= 3) {
      openModal();
    }
  }, [results]);

  return (
    <>
      <div>
        <Toaster position='top-right' />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
        >
          <Results incorrectWords={incorrectWords} correctWords={correctWords} />
          <button
            className='secondary-button'
            type='button'
            onClick={() => closeModal()}
          >
            Close
          </button>
        </Modal>
      </div>
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
    </>
  );
};

export default Game;
