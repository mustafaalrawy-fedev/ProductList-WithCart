import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
  'cart/getProduct',
  async (_arg, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch('http://localhost:9000/deserts');
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],

    isEmpty: true,
    cartItem: [],

    isLoading: false,
    isError: false,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.isEmpty = false;

      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 });
      }

      state.totalPrice = state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    incrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItem.find((item) => item.id === itemId);
      if (item) {
        item.quantity++;
      }
      state.totalPrice = state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    decrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItem.find((item) => item.id === itemId);
      if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
          state.cartItem = state.cartItem.filter((item) => item.id !== itemId);
        }
      }

      state.totalPrice = state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== itemId);
      if (state.cartItem.length === 0) {
        state.isEmpty = true;
      }
    },
    deleteItems: (state, action) => {
      state.cartItem = [];
      state.isEmpty = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.items = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {
  addItem,
  incrementItem,
  decrementItem,
  removeItem,
  deleteItems,
} = cartSlice.actions;
export default cartSlice.reducer;
