import { Dispatch } from 'react';
import { IStatisticsAction, StatisticsActionTypes, IStatistics } from '../../types/statistics';
import { ref } from '../../api/index';
import { INFO_MESSAGES, ERROR_MESSAGES } from '../../utils/messages';

const fetchStatistics = async (dispatch: Dispatch<IStatisticsAction>) => {
  try {
    dispatch({ type: StatisticsActionTypes.FETCH_STATISTICS });
    await ref
      .collection('statistics')
      .orderBy('score', 'desc')
      .get()
      .then((item: any) => {
        const items = item.docs.map((doc: any) => doc.data());
        dispatch({ type: StatisticsActionTypes.FETCH_STATISTICS_SUCCESS, payload: items });
      });
  } catch (e) {
    dispatch({
      type: StatisticsActionTypes.FETCH_STATISTICS_ERROR,
      payload: ERROR_MESSAGES.FETCH_STATISTICS,
    });
  }
};

const addStatistics = (statistics: IStatistics) => (dispatch: Dispatch<IStatisticsAction>) => {
  try {
    dispatch({ type: StatisticsActionTypes.ADD_STATISTICS });
    ref
      .collection('statistics')
      .doc(statistics.id)
      .set(statistics);
    dispatch({
      type: StatisticsActionTypes.ADD_STATISTICS_SUCCESS, payload: INFO_MESSAGES.CREATED,
    });
  } catch (e) {
    dispatch({
      type: StatisticsActionTypes.ADD_STATISTICS_ERROR,
      payload: ERROR_MESSAGES.ADD_STATISTICS,
    });
  }
};

export { fetchStatistics, addStatistics };
