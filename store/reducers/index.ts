import { HYDRATE } from 'next-redux-wrapper';

import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import answerSlice, { MbtiInitialState } from './mbti';

export interface RootState {
  mbti: MbtiInitialState;
}

const rootReducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers<RootState>({ mbti: answerSlice.reducer })(
    state,
    action,
  );
};

export default rootReducer;
