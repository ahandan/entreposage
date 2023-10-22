import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/NavBar.css'
import { useState } from 'react';



export default function NavBarTest() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Navbar data-bs-theme="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
              alt=""
              src={require(collapsed ? "../assets/logo_small.ico" : "../assets/logo.jpeg")}
              width="300rem"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
        <Navbar.Text>
          <div className='navar-brand'>
            <p><b>(418) 522-3775</b></p>
            <p><b style={{color:"#f05b00"}}>Heures d'ouverture : </b> Lundi au vendredi de 8h à 18h.</p>
          </div>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}