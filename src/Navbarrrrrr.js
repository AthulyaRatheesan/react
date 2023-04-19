import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarrrrrr() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        {/* <a class="nav-link active" aria-current="page" href="/A1">Home</a>
        <a class="nav-link active " href="/A2">About</a> */}
        <a class="nav-link active" href="/Loginn">Login</a>

        <a class="nav-link active" href="/Signup">Signup</a>
        
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbarrrrrr