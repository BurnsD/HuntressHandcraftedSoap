import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Container,Navbar } from "react-bootstrap"
import Logo from "../../assets/LogoW-Text.png";
import '../../index.css';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav className="flex-row text-light">
          <Nav.Link className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </Nav.Link>
          <Nav.Link className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </Nav.Link>
        </Nav>
      );
    } else {
      return (
        <Container className="flex-row justify-contents-end mx-auto">
          <div className="m-3">
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <span className='text-light'>Sign Up</span>
            </Link>
          </div>
          <div className="m-3">
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span className='text-light'>Login</span>
            </Link>
          </div>
        </Container>
      );
    }
  }

  return (
    <Navbar id='nav' className="flex-row">
      <Navbar.Brand className="flex-row align-items-center">
        <img src={Logo} className='img-fluid' alt='logo' />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 id="brand" className=' text-light p-3 scripttitle'>Huntress Handcrafted</h1>
        </Link>
      </Navbar.Brand>

      <nav className='mx-auto pt-4'>
        {showNavigation()}
      </nav>
    </Navbar>
  );
}

export default Nav;
