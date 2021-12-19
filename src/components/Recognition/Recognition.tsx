/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import toast, { Toaster } from 'react-hot-toast';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { INFO_MESSAGES } from '../../utils/messages';
import { IResultItem } from '../Game/Game';
import { IRecognition } from './IRecognition';
import './Recognition.css';
import Results from '../Results/Results';

const Recognition = ({ word, results, setResult, handleWorldClick }: IRecognition) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement('#app');

  const customStyles = {
    content: {
      width: '400px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { transcript, listening } = useSpeechRecognition();
  const isWordExist = results.filter((result: IResultItem) => result.word === word.word).length > 0;

  const answer: IResultItem = {};

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    toast.error(INFO_MESSAGES.NOT_SUPPORT_RECOGNITION);
  }

  const skip = () => {
    if (!isWordExist) {
      answer.isCorrect = false;
      setResult([...results, answer]);
    }
  };

  const correct = () => {
    if (!isWordExist) {
      answer.isCorrect = true;
      setResult([...results, answer]);
    }
  };

  useEffect(() => {
    if (word.wordTranslate) {
      toast(word.wordTranslate);
    }
  }, [word]);

  useEffect(() => {
    if (!listening && transcript && !isWordExist) {
      answer.word = word.word;
      answer.transcription = word.transcription;
      answer.audioPath = word.audio;
      if (transcript === word.word) {
        answer.isCorrect = true;
      } else if (transcript !== word.word) {
        answer.isCorrect = false;
      }
      setResult([...results, answer]);
    }
  }, [transcript, listening]);

  useEffect(() => {
    if (results.length >= 10) {
      openModal();
    }
  }, [results]);

  return (
    <>
      <Toaster position='top-right' />
      <div className='recognition'>
        <button
          className='secondary-button'
          type='button'
          onClick={() => SpeechRecognition.startListening()}
        >
          Record answer
        </button>
        <button
          className='secondary-button'
          type='button'
          onClick={() => skip()}
        >
          Skip
        </button>
        <button
          className='secondary-button'
          type='button'
          onClick={() => correct()}
        >
          Correct
        </button>
        <div>
          {/* <button
            className='secondary-button'
            type='button'
            onClick={openModal}
          >
            Results
          </button> */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <Results handleWorldClick={handleWorldClick} results={results} />
            <button
              className='secondary-button'
              type='button'
              onClick={() => closeModal()}
            >
              Close
            </button>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Recognition;
