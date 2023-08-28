import { combineReducers, configureStore } from '@reduxjs/toolkit';
import defaultCounter from '../features/counterSlice';

// const middleware = [
// Add middleware here
// ];

const reducer = combineReducers({ defaultCounter });

export const store = configureStore({
  reducer,
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware().concat(middleware);
  // },
});
