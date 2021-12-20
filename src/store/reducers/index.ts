import { combineReducers } from 'redux';
import wordReducer from './wordReducer';
import statisticsReducer from './statisticsReducer';

export const rootReducer = combineReducers({
  word: wordReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
