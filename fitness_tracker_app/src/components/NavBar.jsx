import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>Fitness Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/exercises">
          Exercises
        </Nav.Link>
        <Nav.Link as={Link} to="/update-exercise">
          Update Exercise
        </Nav.Link>
        <Nav.Link as={Link} to="/summary">
          Summary
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
