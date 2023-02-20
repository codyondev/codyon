import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SelectedAnswer {
  id: string;
  value: string;
}

export interface MbtiInitialState {
  answers: SelectedAnswer[];
}

const initialState: MbtiInitialState = {
  answers: [],
};

const mbtilSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<SelectedAnswer>) => {
      state.answers.push(action.payload);
    },
    resetAnswers: (state) => {
      state.answers = [];
    },
  },
});

export const { addAnswer, resetAnswers } = mbtilSlice.actions;

export default mbtilSlice;
