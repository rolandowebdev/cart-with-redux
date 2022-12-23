/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';

import { CartContainer, Navbar } from './components/index';

const App = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <main>
        <CartContainer />
      </main>
    </>
  );
};

export default App;
