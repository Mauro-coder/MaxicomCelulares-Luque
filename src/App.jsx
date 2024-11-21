import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarReactBootstrap from "./components/NavbarReactBootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
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
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
