import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

// TODO: createAsyncThunk that handles asyncronous logic in your redux application
export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong!');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== payload.itemId
      );
    },
    increse: (state, { payload }) => {
      const cartItem = state.cartItems.find((cart) => cart.id === payload.id);
      cartItem.amount++;
    },
    decrese: (state, { payload }) => {
      const cartItem = state.cartItems.find((cart) => cart.id === payload.id);
      cartItem.amount--;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((cart) => {
        amount += cart.amount;
        total += cart.amount * cart.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const { clearCart, removeItem, increse, decrese, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
