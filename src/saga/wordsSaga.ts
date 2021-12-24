import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchWordsSuccess, fetchWordsError } from '../store/reducers/wordReducer';
import { WordActionTypes, IFetchWordAction } from '../types/word';

const fetchWordsFromApi = (page: number) => fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=0`);

function* fetchWordsWorker(action: IFetchWordAction) : Generator<any, void, any> {
  try {
    const data = yield call(fetchWordsFromApi, action.payload);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(fetchWordsSuccess(json));
  } catch (e) {
    yield put(fetchWordsError());
  }
}

export default function* wordsWatcher() {
  yield takeEvery(WordActionTypes.FETCH_WORDS, fetchWordsWorker);
}
