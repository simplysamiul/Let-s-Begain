import React from 'react';
import logo from '../../../resource/logo.png'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import './MenuBar.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MenuBar = () => {
  const {logOut, user} = useAuth();
    return (
        <Navbar className="menu-background" expand={false} sticky="top">
        <Container>
        <Link to="/"><img src={logo} width="60" height="60" className="d-inline-block align-top" alt="" /></Link>
          <Navbar.Brand className="menu-text">Let's Begin <span className="menu-title">With Us</span> </Navbar.Brand>
          {
            user.email && <img src={user.photoURL} width="60" height="60" style={{borderRadius: "40px"}} alt="" />
          }
          <Navbar.Toggle className="toggle-button" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar" className="side-bar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
            <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="" />
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 menu-items">
                <Link to="/home">Home</Link>
                <Link to={`/mybooking/${user.displayName}`}>My-Booking</Link>
                <Link to="/login">Log-In</Link>
                {
                  user.email && <button onClick={logOut}>Log-Out</button>
                }
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
};

export default MenuBar;