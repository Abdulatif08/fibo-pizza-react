

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/slices/cartSlice';
import likeReducer from '../store/slices/likeSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    like: likeReducer, 
  },
});
