import { IStatistics, StatisticsActionTypes } from '../../types/statistics';
import { ERROR_MESSAGES } from '../../utils/messages';

export const fetchStatistics = () => ({
  type: StatisticsActionTypes.FETCH_STATISTICS,
});

export const fetchStatisticsSuccess = (payload: any) => ({
  type: StatisticsActionTypes.FETCH_STATISTICS_SUCCESS,
  payload,
});

export const fetchStatisticsError = () => ({
  type: StatisticsActionTypes.FETCH_STATISTICS_ERROR,
  payload: ERROR_MESSAGES.FETCH_STATISTICS,
});

export const addStatistics = (payload: IStatistics) => ({
  type: StatisticsActionTypes.ADD_STATISTICS,
  payload,
});

export const addStatisticsSuccsecc = (payload: any) => ({
  type: StatisticsActionTypes.FETCH_STATISTICS,
  payload,
});

export const addStatisticsError = () => ({
  type: StatisticsActionTypes.ADD_STATISTICS_ERROR,
  payload: ERROR_MESSAGES.ADD_STATISTICS,
});
