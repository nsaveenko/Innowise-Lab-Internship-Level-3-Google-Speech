import { WordActionTypes, IWordAction, IWordState } from '../../types/word';

const initialState: IWordState = {
  words: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action: IWordAction): IWordState => {
  switch (action.type) {
    case WordActionTypes.FETCH_WORDS:
      return { loading: true, error: null, words: [] };
    case WordActionTypes.FETCH_WORDS_SUCCESS:
      return { loading: false, error: null, words: action.payload };
    case WordActionTypes.FETCH_WORDS_ERROR:
      return { loading: false, error: action.payload, words: [] };
    default:
      return state;
  }
};

export default postReducer;
