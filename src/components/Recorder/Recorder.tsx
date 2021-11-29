import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { INFO_MESSAGES } from '../../utils/messages';
import './Recorder.css';

const Recorder = () => {
  const {
    transcript,
    resetTranscript,
  } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    toast.error(INFO_MESSAGES.NOT_SUPPORT_RECOGNITION);
  }

  return (
    <>
      <Toaster position='top-right' />
      <div className='recorder'>
        <button className='secondary-button' type='button' onClick={() => SpeechRecognition.startListening()}>
          Record answer
        </button>
        <button className='secondary-button' type='button' onClick={resetTranscript}>
          Reset answer
        </button>
        <p>{transcript}</p>
      </div>
    </>
  );
};

export default Recorder;
