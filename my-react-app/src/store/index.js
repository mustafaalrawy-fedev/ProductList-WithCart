import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice/cartSlice';
import modalSlice from './modalSlice/modalSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: modalSlice,
  },
});

export default store;
