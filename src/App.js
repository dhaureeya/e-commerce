import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from '../components/Home';
import Shop from './components/Home/Home'
import ShopCategory from './components/Pages/ShopCategory';
import Product from './components/Pages/Product';
import LoginSignup from './components/Pages/LoginSignup';
import Cart from './components/Pages/Cart';

 function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory category='men' />} />
          <Route path='/womens' element={<ShopCategory category='women'  />} />
          <Route path='/kids' element={<ShopCategory category='kid' />} />
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;

