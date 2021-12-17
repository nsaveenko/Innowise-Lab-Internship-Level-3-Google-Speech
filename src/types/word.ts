/* eslint-disable no-unused-vars */
export interface IWordState {
  words?: Array<IWord>;
  loading: boolean;
  error: null | string;
}

export interface IWord {
  id?: string;
  word: string;
  transcription: string;
  image: string;
  audio: string;
  wordTranslate?: string;
}

export enum WordActionTypes {
  FETCH_WORDS = 'FETCH_WORDS',
  FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS',
  FETCH_WORDS_ERROR = 'FETCH_WORDS_ERROR'
}

interface IFetchWordAction {
  type: WordActionTypes.FETCH_WORDS;
}

interface IFetchWordsSuccessAction {
  type: WordActionTypes.FETCH_WORDS_SUCCESS;
  payload: Array<IWord>;
}

interface IFetchWordsErrorAction {
  type: WordActionTypes.FETCH_WORDS_ERROR;
  payload: string;
}
export type IWordAction =
  | IFetchWordAction
  | IFetchWordsSuccessAction
  | IFetchWordsErrorAction;
