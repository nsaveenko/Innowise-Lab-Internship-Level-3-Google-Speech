import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { INFO_MESSAGES } from '../../utils/messages';
import { IRecognition } from './IRecognition';
import './Recognition.css';

const Recognition = ({ word }: IRecognition) => {
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  const answer: string[] = [];

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    toast.error(INFO_MESSAGES.NOT_SUPPORT_RECOGNITION);
  }

  useEffect(() => {
    if (listening && transcript) {
      answer.push(transcript);
    }

    if (answer.length) {
      if (answer[answer.length - 1] === word) {
        toast.success('Correct');
      } else {
        toast.error('Incorrect');
      }
    }
  }, [transcript]);

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
      </div>
    </>
  );
};

export default Recognition;
