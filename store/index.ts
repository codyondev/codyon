import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';

import { Reducer, configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      //   if (process.env.NODE_ENV === 'development') {
      //   }
      return getDefaultMiddleware();
    },
    devTools: process.env.NODE_ENV === 'development',
  });

const wrapper = createWrapper(makeStore);

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default wrapper;
