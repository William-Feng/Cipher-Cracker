import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home";
import Caesar from "./Caesar";
import Vigenere from "./Vigenere";
import Atbash from "./Atbash";
import Monoalphabetic from "./Monoalphabetic";
import Railfence from "./Railfence";
import './../styles.css'

export default class NavbarComponent extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="md">
        <Container>
          <Navbar.Brand as={Link} to={"/home"}>Cipher Cracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/atbash"}>Atbash</Nav.Link>
            <Nav.Link as={Link} to={"/caesar"}>Caesar</Nav.Link>
            <Nav.Link as={Link} to={"/monoalphabetic"}>Monoalphabetic</Nav.Link>
            <Nav.Link as={Link} to={"/railfence"}>Railfence</Nav.Link>
            <Nav.Link as={Link} to={"/vigenere"}>Vigenère</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/atbash" element={<Atbash />} />
          <Route path="/caesar" element={<Caesar />} />
          <Route path="/monoalphabetic" element={<Monoalphabetic />} />
          <Route path="/railfence" element={<Railfence />} />
          <Route path="/vigenere" element={<Vigenere />} />
        </Routes>
      </div>
      </Router>
    )
  }
}
