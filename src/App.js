import { useEffect , useState } from 'react';
import { Route , Routes } from "react-router-dom";
import axios from 'axios';
import Loading from './components/loading/Loading';
import APIContext from './context/ApiContext';
import OrdersListContext from './context/OrdersListContext';
import CartContext from './context/CartContext';
import Home from './page/Home';
import Menu from './page/Menu';
import Cart from './page/Cart';
import NotFound from './page/404';

export default function App() {

  const [data , setData] = useState('');
  const [loading , setLoading] = useState(true);
  const [err , setErr] = useState('');
  const [ordersList , setOrdersList] = useState([]);
  const [cart , setCart] = useState([]);

  useEffect ( ( ) => {
    let url = "https://mocki.io/v1/491c31df-b8e9-480c-8469-6381fb3eaf1b";
    const callApi = async() => {
      try{
        const res = await (axios.get(url))
        setData(res.data.food);
        setLoading(false);
      }catch (err){
        setErr(err.message)
        setLoading(false)
      }
    }
    
    callApi();

  },[]) 

  return (
    <>
      {
        loading ? (
          <Loading />
          ): err ? (
            <div className='w-full h-screen bg-CCE3DE flex flex-col justify-center items-center gap-5'>
              <p className='text-6B9080 font-black font-Urbanist text-6xl uppercase'>
                error message
              </p>
              <p className='text-3a5a40 font-Urbanist text-3xl uppercase'>
                {err}
              </p>
            </div>
          ):(
            <div className='m-0 p-0 w-full h-full'>
              <APIContext.Provider value={data}>
                <OrdersListContext.Provider value={[ordersList , setOrdersList]}>
                  <CartContext.Provider value={[cart , setCart]}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Menu" element={<Menu />}/>
                    <Route path="/Cart" element={<Cart />}/>
                    <Route path="*" element={<NotFound />}/>
                  </Routes>
                  </CartContext.Provider>
                </OrdersListContext.Provider>
              </APIContext.Provider>
            </div>
          )
      }
    </>
  );
}