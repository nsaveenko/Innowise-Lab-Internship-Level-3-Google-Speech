import { put, takeEvery } from 'redux-saga/effects';
import { fetchStatisticsSuccess, fetchStatisticsError } from '../store/reducers/statisticsReducer';
import { StatisticsActionTypes } from '../types/statistics';
import { ref } from '../api/index';

function* fetchStatistics(): any {
  yield ref
    .collection('statistics')
    .orderBy('score', 'desc')
    .get()
    .then((item: any) => {
      const items = item.docs.map((doc: any) => doc.data());
      return items;
    });
}

function* fetchStatisticsWorker() : Generator<any, void, any> {
  try {
    const items = yield fetchStatistics().next().value;
    yield put(fetchStatisticsSuccess(items));
  } catch (e) {
    yield put(fetchStatisticsError());
  }
}

export default function* statisticsWatcher() {
  yield takeEvery(StatisticsActionTypes.FETCH_STATISTICS, fetchStatisticsWorker);
}
