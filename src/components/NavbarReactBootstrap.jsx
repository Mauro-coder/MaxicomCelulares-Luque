import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetReactIcons from './CartWidgetReactIcons';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Maxicom Celulares</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/productos/celulares'>Celulares</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/productos/accesorios'>Accesorios</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={NavLink} to='/productos/articulos varios'>Articulos Varios</NavDropdown.Item>
            </NavDropdown>
          </Nav>  
          <NavLink to='/cart' style={{textDecoration:'none'}}><CartWidgetReactIcons/></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;