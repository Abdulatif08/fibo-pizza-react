
import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    data: [],
  },
  
  reducers: {
    addCard: (state, action) => {
      const exists = state.data.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCard: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addCard,
  removeFromCard,
  incrementQuantity,
  decrementQuantity,
} = cardSlice.actions;

export default cardSlice.reducer;
