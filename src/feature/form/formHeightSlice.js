import { createSlice } from '@reduxjs/toolkit';

export const formHeightSlice = createSlice({
  name: 'formHeight',
  initialState: {
    value: 466,
  },
  reducers: {
    openCollapsible: (state) => {
      state.value += 145;
    },
    closeCollapsible: (state) => {
      state.value -= 145;
    },
  },
})

// Action creators are generated for each case reducer function
export const { openCollapsible, closeCollapsible } = formHeightSlice.actions

export default formHeightSlice.reducer