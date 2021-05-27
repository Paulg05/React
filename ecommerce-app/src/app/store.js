import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/basketSlice';

export const store = configureStore({
  //Globale store
  reducer: {
    basket: basketReducer,
  },
});
