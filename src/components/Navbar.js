import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  return (
    
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <div className="navbar-item" href="https://bulma.io">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </div>
  
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <Link to="/login" className="button is-info">Login</Link>
            </p>
            <p className="control">
              <Link to="/signup" className="button is-primary">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

  
  )
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default Navbar;