import { useContext , useEffect , useRef } from 'react';
import SectionOne from '../components/menuSections/SectionOne';
import SectionTwo from '../components/menuSections/SectionTwo';
import SectionThree from '../components/menuSections/SectionThree';
import SectionFour from '../components/menuSections/SectionFour';
import SectionFive from '../components/menuSections/SectionFive';
import CartBtn from '../components/button/CartBtn';
import DefaultBtn from '../components/button/DefaultBtn';
import OrdersListContext from '../context/OrdersListContext';
import CartContext from '../context/CartContext';

export default function Menu() {

  const ordersListContext = useContext(OrdersListContext);
  const ordersList = ordersListContext[0];

  const cartContext = useContext(CartContext);
  const setCart = cartContext[1];

  useEffect(() => {

    const obj = {};

    ordersList.forEach(index => {
      if (index.id in obj) {
        obj[index.id].name = index.name;
        obj[index.id].price += parseFloat(index.price);
        obj[index.id].number += index.number;
        obj[index.id].id = index.id
      } else {
        obj[index.id] = {
          name:index.name ,
          price: parseFloat(index.price) ,
          number: index.number ,
          id: index.id ,
        };
      }
    });
  
    const itemsArray = Object.values(obj);
    setCart(itemsArray);

  },[ordersList]);

  const One = useRef();
  const Two = useRef();
  const Three = useRef();
  const Four = useRef();
  const Five = useRef();

  const handleClickScroll = (num) => {
     
    num === 1 && One.current.scrollIntoView({behavior: 'smooth'});
    num === 2 && Two.current.scrollIntoView({behavior: 'smooth'});
    num === 3 && Three.current.scrollIntoView({behavior: 'smooth'});
    num === 4 && Four.current.scrollIntoView({behavior: 'smooth'});
    num === 5 && Five.current.scrollIntoView({behavior: 'smooth'});
    
  }

  return (
    <div>
      <div className='flex flex-row justify-center items-center gap-10 p-8 w-full h-10 fixed bg-A4C3B2 z-10 max-md:gap-5 max-sm:hidden'>
        <button className='text-xl text-white font-Urbanist uppercase hover:text-ff9500 hover:text-CCE3DE focus:bg-inherit' 
        onClick={() => handleClickScroll(1)}>
          mocktail
        </button>
        <button className='text-xl text-white font-Urbanist uppercase hover:text-ff9500 hover:text-CCE3DE focus:bg-inherit' 
        onClick={() => handleClickScroll(2)}>
          breakfast
        </button>
        <button className='text-xl text-white font-Urbanist uppercase hover:text-ff9500 hover:text-CCE3DE focus:bg-inherit' 
        onClick={() => handleClickScroll(3)}>
          salad
        </button>
        <button className='text-xl text-white font-Urbanist uppercase hover:text-ff9500 hover:text-CCE3DE focus:bg-inherit' 
        onClick={() => handleClickScroll(4)}>
          pizzas
        </button>
        <button className='text-xl text-white font-Urbanist uppercase hover:text-ff9500 hover:text-CCE3DE focus:bg-inherit' 
        onClick={() => handleClickScroll(5)}>
          appetizer
        </button>
      </div>
      <div className='flex flex-col justify-center items-center gap-3 pt-20 bg-CCE3DE'>
        <div className='fixed left-3 top-20 max-sm:hidden'>
          <CartBtn />
        </div>
        <span ref={One} className='-top-28 relative'></span>
        <div className='flex flex-col justify-center items-center gap-5 w-full'>
          <SectionOne/>
        </div>
        <span ref={Two} className='-top-28 relative'></span>
        <div className='flex flex-col justify-center items-center gap-5 w-full'>
          <SectionTwo />
        </div>
        <span ref={Three} className='-top-28 relative'></span>
        <div className='flex flex-col justify-center items-center gap-5 w-full'>
          <SectionThree />
        </div>
        <span ref={Four} className='-top-28 relative'></span>
        <div className='flex flex-col justify-center items-center gap-5 w-full'>
          <SectionFour />
        </div>
        <span ref={Five} className='-top-28 relative'></span>
        <div className='flex flex-col justify-center items-center gap-5 w-full'>
          <SectionFive />
        </div>
        <div className='w-9/12 p-10 flex flex-row justify-center items-center max-sm:w-10/12'>
          <DefaultBtn name={'Go to cart'} path={'/Cart'} />
        </div>
      </div>
    </div>
  );
}