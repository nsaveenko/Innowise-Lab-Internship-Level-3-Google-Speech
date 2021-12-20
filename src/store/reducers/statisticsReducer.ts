import { StatisticsActionTypes, IStatisticsAction, IStatisticsState } from '../../types/statistics';

const initialState: IStatisticsState = {
  statistics: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action: IStatisticsAction): IStatisticsState => {
  switch (action.type) {
    case StatisticsActionTypes.FETCH_STATISTICS:
      return { loading: true, error: null, statistics: [] };
    case StatisticsActionTypes.FETCH_STATISTICS_SUCCESS:
      return { loading: false, error: null, statistics: action.payload };
    case StatisticsActionTypes.FETCH_STATISTICS_ERROR:
      return { loading: false, error: action.payload, statistics: [] };
    case StatisticsActionTypes.ADD_STATISTICS:
      return { loading: true, error: null };
    case StatisticsActionTypes.ADD_STATISTICS_SUCCESS:
      return { loading: false, error: null };
    case StatisticsActionTypes.ADD_STATISTICS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
