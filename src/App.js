import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TestContext } from './context/TestContext';
import CartContextProvider from './context/CartContext';



function App() {

  const Juancito = {nombre: "Juan", edad:24}

  return (
    <>
      <CartContextProvider>
    <BrowserRouter>
          <NavBar></NavBar>
              <Routes>
            <Route path='/' element={<ItemListContainer/>} ></Route>
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
