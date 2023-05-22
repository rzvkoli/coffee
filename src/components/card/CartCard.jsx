import DefaultPic from '../../assets/default-image.jpg';
import { HiOutlineX } from "react-icons/hi";
import { useRecoilState } from 'recoil';
import CartAtom from '../../atoms/cartAtom';

export default function CartCard({ name , number , price }) {

  const [cart , setCart] = useRecoilState(CartAtom);

  const removeProduct = (name) => { 

    var res = cart.filter(function(index) {
      return index.name !== name
    })

    setCart(res);
  }

  return (
    <div className='flex flex-row justify-between items-center w-8/12 p-5 border-y-2 border-3a5a40'>
        <div className='w-3/12 max-sm:hidden'>
            <img className='w-full h-full rounded' src={DefaultPic} loading='lazy' alt='PRODUCT'/>
        </div>
        <h1 className='font-Urbanist text-3a5a40 uppercase text-2xl max-md:text-base'>
          {name}
        </h1>
        <p className='flex flex-row justify-center items-center gap-1 font-mono text-xl text-3a5a40 max-md:text-sm'>
            {number}
        </p>
        <p className='flex flex-row justify-center items-center gap-1 font-mono text-3a5a40 text-xl max-md:text-sm'>
            <span className='font-Urbanist text-3a5a40 text-xl font-thin max-md:text-sm'>$</span>
            {price}
        </p>
        <button
        className='text-xl text-3a5a40 max-md:text-base'
        onClick={() => removeProduct(name)}>
          < HiOutlineX />
        </button>
    </div>
  );
}
