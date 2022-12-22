import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../../utils/cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 10,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
});

export default cartSlice.reducer;
