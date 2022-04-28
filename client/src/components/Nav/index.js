import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap"
import Logo from "../../assets/LogoW-Text.png";
import '../../index.css';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <Container className="flex-row mx-auto">
          <div className="mx-1">
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <span className='text-dark'>Sign Up</span>
            </Link>
          </div>
          <div className="mx-1">
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <span className='text-dark'>Login</span>
            </Link>
          </div>
        </Container>
      );
    }
  }

  return (
    <header className="flex-row">
      <h1>
        <img src={Logo} className='img-fluid' alt='logo' />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span id="brand" className='script'>Huntress Handcrafted</span>
        </Link>
      </h1>

      <nav className='mx-auto pt-4'>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
