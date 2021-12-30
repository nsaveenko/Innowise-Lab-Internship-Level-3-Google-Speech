import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchWordsSuccess, fetchWordsError } from '../store/actions/wordsAction';
import { WordActionTypes, IFetchWordAction } from '../types/word';
import wordsApi from '../api/urls';

const fetchWordsFromApi = (page: number) => fetch(`${wordsApi}words?page=${page}&group=0`);

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
