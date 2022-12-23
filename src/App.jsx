/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

import { CartContainer, Navbar, Modal } from './components/index';

const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <main>
        <CartContainer />
      </main>
    </>
  );
};

export default App;
