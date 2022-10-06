import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>BATH DECO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Productos</Nav.Link>
            <Nav.Link as={Link} to='/nosotros'>Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/faq'>Preguntas Frecuentes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default Menu;