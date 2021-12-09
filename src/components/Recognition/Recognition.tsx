import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { INFO_MESSAGES } from '../../utils/messages';
import { IRecognition } from './IRecognition';
import './Recognition.css';

const Recognition = ({ word, results, setResult }: IRecognition) => {
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    toast.error(INFO_MESSAGES.NOT_SUPPORT_RECOGNITION);
  }

  useEffect(() => {
    if (!listening && transcript) {
      const answer: any = {};
      if (transcript === word) {
        answer[word] = true;
      } else {
        answer[word] = false;
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
      </div>
    </>
  );
};

export default Recognition;
