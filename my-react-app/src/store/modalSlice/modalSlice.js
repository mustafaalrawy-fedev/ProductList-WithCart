import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalData: [],
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalData = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalData = [];
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
