import { WordActionTypes } from '../../types/word';

export const fetchWords = (payload: number) => ({
  type: WordActionTypes.FETCH_WORDS,
  payload,
});

export const fetchWordsSuccess = (payload: any) => ({
  type: WordActionTypes.FETCH_WORDS_SUCCESS,
  payload,
});

export const fetchWordsError = () => ({
  type: WordActionTypes.FETCH_WORDS_ERROR,
});
