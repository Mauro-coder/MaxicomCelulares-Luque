import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarReactBootstrap from "./components/NavbarReactBootstrap";

function App() {
  return (
    <BrowserRouter>
      <NavbarReactBootstrap/>
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
      </Routes>
      <div className="cardsContainer">
        <Cards
          image="/xiaomi_redmi_note.webp"
          description="Xiaomi Redmi Note 13"
        />
        <Cards
          image="/samsung_galaxy_a15.webp"
          description="Samsung Galaxy A15"
        />
        <Cards image="/motorola_g24.webp" description="Motorola Moto G24" />
        <Cards image="/motorola_razer.webp" description="Motorola Razr" />
      </div>
    </BrowserRouter>
  );
}

export default App;
