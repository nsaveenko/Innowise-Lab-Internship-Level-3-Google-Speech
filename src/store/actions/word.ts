import { Dispatch } from 'react';
import axios from 'axios';
import { IWordAction, WordActionTypes } from '../../types/word';
import { ERROR_MESSAGES } from '../../utils/messages';

const fetchWords = async (dispatch: Dispatch<IWordAction>) => {
  try {
    dispatch({ type: WordActionTypes.FETCH_WORDS });
    const response = await axios.get('https://afternoon-falls-25894.herokuapp.com/words?page=1&group=0');
    dispatch({ type: WordActionTypes.FETCH_WORDS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({
      type: WordActionTypes.FETCH_WORDS_ERROR,
      payload: ERROR_MESSAGES.WORD_NOT_LOADED_MESSAGE,
    });
  }
};

export default fetchWords;
