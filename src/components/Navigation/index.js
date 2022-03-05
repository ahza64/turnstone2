import {Navbar, Container, Nav} from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navigation() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>TurnStone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
