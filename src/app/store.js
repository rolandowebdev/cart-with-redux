import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, modalReducer } from '../features/index';

// * store function serves as a link between store / reducer to all components in react
export const store = configureStore({
  reducer: {
    // add all reducer here
    cart: cartReducer,
    modal: modalReducer,
  },
});
