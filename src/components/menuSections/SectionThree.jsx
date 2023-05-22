import ProductCard from '../card/ProductCard';
import {useRecoilState} from 'recoil';
import DataAtom from '../../atoms/dataAtom';

export default function SectionThree() {

  const dataStateReciol = useRecoilState(DataAtom);
  const data = dataStateReciol[0];
  const dataPage = data.salad;

  return (
    <div className='flex flex-col justify-center items-center gap-10 w-full'>
      <div className='flex flex-row justify-center items-center gap-2 w-8/12'>
        <div className='bg-A4C3B2 w-full h-px'></div>
        <p className='flex flex-row justify-start items-center text-3xl font-extrabold text-6B9080 font-Urbanist uppercase'>
          salad
        </p>
        <div className='bg-A4C3B2 w-full h-px'></div>
      </div>
      <div className='flex flex-row justify-center items-start flex-wrap w-full gap-3 max-lg:gap-6'>
        {
          dataPage.map((index) => {
              return <ProductCard key={index.id} {...index} />
          })
        }
      </div>
    </div>
  );
}
