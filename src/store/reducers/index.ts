import { combineReducers } from 'redux';
import wordReducer from './wordReducer';
import statisticsReducer from './statisticsReducer';

export const rootReducer = combineReducers({
  wordReducer,
  statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
