import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from '../types';

export const counter = createSlice({
  name: 'counter',
  initialState: {
    total: 0,
  } as CounterState,
  reducers: {
    reset: () => {
      return { total: 0 };
    },
    increment: (state) => {
      state.total++;
    },
    decrement: (state) => {
      state.total--;
    },
  },
});

export const { increment, decrement, reset } = counter.actions;
export default counter.reducer;
