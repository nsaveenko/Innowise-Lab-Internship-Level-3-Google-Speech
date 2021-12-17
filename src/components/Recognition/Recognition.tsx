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

const Recognition = ({ word, results, setResult }: IRecognition) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement('#app');

  const customStyles = {
    content: {
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

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();
  const answer: any = {};
  const isWordExist = results.filter((result: IResultItem) => result.word === word).length > 0;

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    toast.error(INFO_MESSAGES.NOT_SUPPORT_RECOGNITION);
  }

  const skip = () => {
    if (!isWordExist) {
      answer.word = word;
      answer.isCorrect = false;
      setResult([...results, answer]);
    }
  };

  const correct = () => {
    if (!isWordExist) {
      answer.word = word;
      answer.isCorrect = true;
      setResult([...results, answer]);
    }
  };

  useEffect(() => {
    if (!listening && transcript) {
      if (transcript === word) {
        answer.word = word;
        answer.isCorrect = true;
      } else {
        answer.word = word;
        answer.isCorrect = false;
      }
      setResult([...results, answer]);
    }
  }, [transcript, listening]);

  return (
    <>
      <Toaster position='top-right' />
      <div className='recognition'>
        <button className='secondary-button' type='button' onClick={() => SpeechRecognition.startListening()}>
          Record answer
        </button>
        <button className='secondary-button' type='button' onClick={resetTranscript}>
          Reset answer
        </button>
        <button className='secondary-button' type='button' onClick={() => skip()}>
          Skip
        </button>
        <button className='secondary-button' type='button' onClick={() => correct()}>
          Correct
        </button>
        <div>
          <button className='secondary-button' type='button' onClick={openModal}>Results</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h1>MY MODAL</h1>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Recognition;
