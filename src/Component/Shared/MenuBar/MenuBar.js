import React from 'react';
import logo from '../../../resource/logo.png'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './MenuBar.css';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <Navbar className="menu-background" expand={false} sticky="top">
        <Container>
        <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="" />
          <Navbar.Brand className="menu-text">Let's Begin <span className="menu-title">With Us</span> </Navbar.Brand>
          <Navbar.Toggle className="toggle-button" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar" className="side-bar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
            <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="" />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 menu-items">
                <Link to="/home">Home</Link>
                <Link to="/home">Home</Link>
                <Link to="/home">Home</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
};

export default MenuBar;