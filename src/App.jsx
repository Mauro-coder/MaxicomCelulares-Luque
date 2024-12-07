import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarReactBootstrap from "./components/NavbarReactBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import CartView from "./components/CartView";
import Error from "./components/Error";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavbarReactBootstrap />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenidos a Maxicom Celulares"
              texto="Encontra toda la variedad de celulares y accesorios"
            />
          }
        />
        <Route
          path="/productos/:productosId"
          element={
            <ItemListContainer
              greeting="Bienvenidos a Maxicom Celulares"
              texto="Encontra toda la variedad de celulares y accesorios"
            />
          }
        />
        <Route path='/cart' element={<CartView/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
