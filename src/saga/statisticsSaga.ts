import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchStatisticsSuccess, fetchStatisticsError, addStatisticsError, addStatisticsSuccsecc } from '../store/actions/statistics';
import { IStatistics, StatisticsActionTypes } from '../types/statistics';
import { ref } from '../api/index';

function* fetchStatistics(): Generator<any, void, any> {
  yield ref
    .collection('statistics')
    .orderBy('score', 'desc')
    .get()
    .then((item: any) => {
      const items = item.docs.map((doc: any) => doc.data());
      return items;
    });
}

function* addStatisticsToFirebase(statistics: IStatistics): any {
  yield ref
    .collection('statistics')
    .doc(statistics.id)
    .set(statistics);
}

function* fetchStatisticsWorker() : Generator<any, void, any> {
  try {
    const items = yield fetchStatistics().next().value;
    yield put(fetchStatisticsSuccess(items));
  } catch (e) {
    yield put(fetchStatisticsError());
  }
}

function* addStatisticsWorker(action: any) : Generator<any, void, any> {
  try {
    const { payload } = action;
    const newItem = yield call(addStatisticsToFirebase, payload);
    yield put(addStatisticsSuccsecc(newItem));
  } catch (e) {
    yield put(addStatisticsError());
  }
}

export default function* statisticsWatcher() {
  yield takeEvery(StatisticsActionTypes.FETCH_STATISTICS, fetchStatisticsWorker);
  yield takeEvery(StatisticsActionTypes.ADD_STATISTICS, addStatisticsWorker);
}
