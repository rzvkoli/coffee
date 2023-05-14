import {  useContext } from 'react';
import CartContext from '../context/CartContext';
import CartCard from '../components/card/CartCard';

export default function Cart() {

  const cartContext = useContext(CartContext);
  const cart = cartContext[0];

  const totalNumber = cart.reduce((total, item) => total + item.number, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.number, 0);

  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center gap-5 bg-CCE3DE pt-10'>
      <div className='w-10/12 flex flex-col justify-start items-center gap-5'>
      {
        cart.map((index) => {
          return (
            <CartCard
            key={index.id}
            name={index.name}
            number={index.number}
            price={index.price}
            />
          );
        })
      }
      </div>
      <div className='flex flex-col justify-start items-center font-Urbanist gap-10 uppercase w-full p-4'>
        <div className='flex flex-row justify-center items-center gap-4'>
          <p className='font-bold text-3a5a40 text-2xl'>
          Total orders
          </p>
          <p className='text-3a5a40 text-2xl'>
            {totalNumber}
          </p>
        </div>
        <div className='flex flex-row justify-center items-center gap-4'>
          <p className='font-bold text-3a5a40 text-2xl'>
          total price
          </p>
          <p  className='text-3a5a40 text-2xl'>
            {'$ '+totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}