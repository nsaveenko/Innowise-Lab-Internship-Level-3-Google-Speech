/* eslint-disable no-unused-vars */
export interface IStatisticsState {
  statistics?: Array<IStatistics>;
  loading: boolean;
  error: null | string;
}

export interface IStatistics {
  id: string;
  email: string;
  countOfCorrectAnswers: number;
  countOfIncorrectAnswers: number;
  score: number;
  level: number;
  date: string;
}

export enum StatisticsActionTypes {
  FETCH_STATISTICS = 'FETCH_STATISTICS',
  FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS',
  FETCH_STATISTICS_ERROR = 'FETCH_STATISTICS_ERROR',
  ADD_STATISTICS = 'ADD_STATISTICS',
  ADD_STATISTICS_SUCCESS = 'ADD_STATISTICS_SUCCESS',
  ADD_STATISTICS_ERROR = 'ADD_STATISTICS_ERROR',
}

interface IFetchStatisticsAction {
  type: StatisticsActionTypes.FETCH_STATISTICS;
}

interface IFetchStatisticsSuccessAction {
  type: StatisticsActionTypes.FETCH_STATISTICS_SUCCESS;
  payload: Array<IStatistics>;
}

interface IFetchStatisticsErrorAction {
  type: StatisticsActionTypes.FETCH_STATISTICS_ERROR;
  payload: string;
}

interface IAddStatisticsAction {
  type: StatisticsActionTypes.ADD_STATISTICS;
  payload: any;
}

interface IAddStatisticsSuccessAction {
  type: StatisticsActionTypes.ADD_STATISTICS_SUCCESS;
  payload: string;
}

interface IAddStatisticsErrorAction {
  type: StatisticsActionTypes.ADD_STATISTICS_ERROR;
  payload: string;
}

export type IStatisticsAction =
  | IFetchStatisticsAction
  | IFetchStatisticsSuccessAction
  | IFetchStatisticsErrorAction
  | IAddStatisticsAction
  | IAddStatisticsSuccessAction
  | IAddStatisticsErrorAction;
