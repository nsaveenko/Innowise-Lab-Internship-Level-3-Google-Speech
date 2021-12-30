import { all } from 'redux-saga/effects';
import wordsWatcher from './wordsSaga';
import statisticsWatcher from './statisticsSaga';

export default function* rootWatcher() {
  yield all([wordsWatcher(), statisticsWatcher()]);
}
