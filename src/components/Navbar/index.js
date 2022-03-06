import {Navbar, Container, Nav, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import Hamburger from "hamburger-react"
import "./Navbar.css"

function NavbarDesktop() {
  return (
    <div>
      TurnStone
    </div>
  )
}

function NavbarMobile() {
  return (
    <div>
      <Hamburger/>
    </div>
  )
}

export default function Navigation() {
  // <Link to="/">Home</Link>
  // <Link to="/resume">Resume</Link>
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar-desktop">
          <NavbarDesktop/>
        </div>
        <div className="navbar-mobile">
          <NavbarMobile/>
        </div>
      </Container>
    </nav>
  )
}
