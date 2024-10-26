import CartWidget from "./cartWidget"

const NavBar = () =>{
   return(
    <nav className="navContainer">
        <a className="aLink">Maxicom Celulares</a>
        <a className="aLink">Celulares</a>
        <a className="aLink">Ofertas</a>
        <a className="aLink">Accesorios</a>
        <CartWidget counter={15}/>
    </nav>
   )
}

export default NavBar