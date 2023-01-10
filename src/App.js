import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Headers from './components/Headers/headers'
import Main from './components/Main/main'
import Volkswagen from './components/Pages/Volkswagen/volkswagen';
import Audi from './components/Pages/Audi/audi';
import Seat from './components/Pages/Seat/seat';
import Skoda from './components/Pages/Skoda/skoda'
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Pages/cart';
import { CartContextProvider } from './components/storage/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className="App">
        <Headers/>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/practicaReact' element={<Main/>}/>
            <Route path='/Volkswagen' element={<Volkswagen/>}/>
            <Route path='/Audi' element={<Audi/>}/>
            <Route path='/Seat' element={<Seat/>}/>
            <Route path='/Skoda' element={<Skoda/>}/>
            <Route path='/item/:idProducto' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;