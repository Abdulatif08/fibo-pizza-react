import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index === -1) {
        state.items.push(action.payload); 
      } else {
        state.items.splice(index, 1); 
      }
    }
  }
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
