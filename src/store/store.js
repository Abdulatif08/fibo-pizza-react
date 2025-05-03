

import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../store/slices/cardSlice';
import likeReducer from '../store/slices/likeSlice'; 

export const store = configureStore({
  reducer: {
    card: cardReducer,
    like: likeReducer, 
  },
});
