import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { INFO_MESSAGES } from '../../utils/messages';
import { IResultItem } from '../Game/Game';
import { IRecognition } from './IRecognition';
import './Recognition.css';

const Recognition = ({ wordItem, results, setResult }: IRecognition) => {
  const { word, transcription, audio } = wordItem;
  const { transcript, listening } = useSpeechRecognition();
  const isWordExist = results.filter((result: IResultItem) => result.word === word).length > 0;
  const answer: IResultItem = {};
  const [cls, setCls] = useState<Array<string>>(['secondary-button']);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    toast.error(INFO_MESSAGES.NOT_SUPPORT_RECOGNITION);
  }

  const skip = () => {
    if (!isWordExist) {
      answer.isCorrect = false;
      setResult([...results, answer]);
    }
  };

  const start = () => {
    SpeechRecognition.startListening();
  };

  useEffect(() => {
    answer.word = word;
    answer.transcription = transcription;
    answer.audioPath = audio;
  }, [wordItem]);

  useEffect(() => {
    if (listening) {
      setCls([...cls, 'listening']);
    }
    if (!listening) {
      setCls(['secondary-button']);
    }
    if (!listening && transcript && !isWordExist) {
      answer.word = word;
      answer.transcription = transcription;
      answer.audioPath = audio;
      if (transcript === word) {
        answer.isCorrect = true;
      }
      answer.isCorrect = false;
      setResult([...results, answer]);
    }
  }, [transcript, listening]);

  return (
    <>
      <Toaster position='top-right' />
      <div className='recognition'>
        <button
          className={cls.join(' ')}
          type='button'
          onClick={start}
        >
          Record answer
        </button>
        <button
          className='secondary-button'
          type='button'
          onClick={skip}
        >
          Skip
        </button>
      </div>
    </>
  );
};

export default Recognition;
