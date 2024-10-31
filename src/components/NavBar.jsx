import CartWidget from "./cartWidget"

const NavBar = () =>{
   return(
    <nav className="navContainer">
        <a className="aLink" href="*">Maxicom Celulares</a>
        <a className="aLink" href="*">Celulares</a>
        <a className="aLink" href="*">Ofertas</a>
        <a className="aLink" href="*">Accesorios</a>
        <CartWidget counter={15}/>
    </nav>
   )
}

export default NavBar