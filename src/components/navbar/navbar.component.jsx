import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import SideCard from "../side-card/side-card.component";
import Dashboard from "../dashboard/dasboard.component";

function Navigation() {
  return (
    <>
    <body style={{background: "#02b0ac", overflowX: 'hidden'}}>
      <Navbar bg="light" variant="light" className="px-3 shadow-sm fixed-top">
        <Container fluid>
          <Navbar.Brand className="p-2" href="#home">Parlour</Navbar.Brand>
          <Nav className="pe-5">
            <Nav.Link className="px-3" href="#home"><i class="fa-regular fa-calendar"></i></Nav.Link>
            <Nav.Link className="px-3" href="#features"><i class="fa-regular fa-user"></i></Nav.Link>
            <Nav.Link className="px-3" href="#pricing"><i class="fa-solid fa-gear"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <SideCard/>
      <Dashboard/>
    </body>
    </>
  );
}

export default Navigation;
