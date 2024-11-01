import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Cards from './components/cards'

function App() {

  return (
  <div className='headerContainer'>
    <NavBar/>
    <ItemListContainer greeting ='Bienvenidos a Maxicom Celulares' texto ='Encontra toda la variedad de celulares y accesorios'/>
    <div className='cardsContainer'>
      <Cards image = '/xiaomi_redmi_note.webp' description = 'Xiaomi Redmi Note 13'/>
      <Cards image = '/samsung_galaxy_a15.webp' description = 'Samsung Galaxy A15'/>
      <Cards image = '/motorola_g24.webp' description = 'Motorola Moto G24'/>
      <Cards image = '/motorola_razer.webp' description = 'Motorola Razr'/>
    </div>
  </div>
  )
}

export default App
