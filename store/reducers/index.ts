import { HYDRATE } from 'next-redux-wrapper';

import { AnyAction, combineReducers } from '@reduxjs/toolkit';

interface RootState {}

const rootReducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    // 해당 부분에 리듀서(slice) 추가
  })(state, action);
};

export default rootReducer;
