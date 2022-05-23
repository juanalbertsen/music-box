import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout'



function App() {

  return (
    <>
      <CartContextProvider>
    <BrowserRouter>
          <NavBar></NavBar>
              <Routes>
            <Route path='/' element={<ItemListContainer/>} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
            <Route path='/checkout' element={<Checkout/>} ></Route>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
            <Route path='/item/:idParam' element={<ItemDetailContainer/>}></Route>
            <Route></Route>
          </Routes>
    </BrowserRouter>
      </CartContextProvider>

    </>
     

  );
}

export default App;
