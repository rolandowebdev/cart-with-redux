import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../../utils/cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 4,
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
  },
});

export const { clearCart, removeItem, increse, decrese } = cartSlice.actions;
export default cartSlice.reducer;
