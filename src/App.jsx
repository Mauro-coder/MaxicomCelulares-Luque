import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
  <div>
    <NavBar/>
    <ItemListContainer greeting ='Bienvenidos a Maxicom Celulares' texto ='Encontra toda la variedad de celulares y accesorios'/>
  </div>
  )
}

export default App
