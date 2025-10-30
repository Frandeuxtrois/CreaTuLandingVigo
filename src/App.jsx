import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import CartContainer from './components/CartContainer/CartContainer';

export default function App() {
  return (
    <BrowserRouter>  
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!"/>}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer />} />
          <Route path="/item/:productId" element={ <ItemDetailContainer/>} /> 
          <Route path="/cart" element={ <CartContainer />} />
          <Route path="*"  element={ <h1>404: Página no encontrada</h1>} /> 
        </Routes>
        
    </BrowserRouter>)     
}