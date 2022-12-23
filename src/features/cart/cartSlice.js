import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const link = 'https://course-api.com/react-useReducer-cart-project';

// TODO: createAsyncThunk that handles asyncronous logic in your redux application
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(link)
    .then((response) => response.json())
    .catch((err) => console.log(err));
});

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increse, decrese, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
