import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../../utils/cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

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
});

export const { clearCart, removeItem, increse, decrese, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
