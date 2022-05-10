import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar></NavBar>
        

        <Routes>
          <Route path='/' element={<ItemListContainer/>} ></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route path='/item/:idParam' element={<ItemDetailContainer/>}></Route>
          <Route></Route>
        </Routes>
    </BrowserRouter>
    </>
     

  );
}

export default App;
