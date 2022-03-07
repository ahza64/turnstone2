import { useState, useEffect } from 'react'
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Hamburger from "hamburger-react"
import "./Navbar.css"

function NavbarDesktop() {
  return (
    <NavbarLinksDesktop/>
  )
}

function NavbarLinksDesktop() {
  return (
    <div className="navbar-links-wrapper">
      <div>
        TurnStone
      </div>
      <div className="nav-links-wrapper">
        <div className="navlink">
          <Link to="/">
            <Button variant="outline-secondary">
              Home
            </Button>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/resume">
            <Button variant="outline-secondary">
              Resume
            </Button>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/projects">
            <Button variant="outline-secondary">
              Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function NavbarMobile() {
  const [showMenu, setShowMenu] = useState(false)
  const handleShow = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (showMenu) setShowMenu(false)
    }

    window.addEventListener("resize", closeMenuOnResize)
    return () => {
      window.removeEventListener("resize", closeMenuOnResize)
    }
  })

  return (
    <div className="hamburger-wrapper">
      <div>
        <Hamburger toggled={showMenu} onToggle={handleShow}/>
      </div>
      {showMenu && (
        <NavbarMobileMenu toggled={showMenu} onToggle={handleShow}/>
      )}
    </div>
  )
}

function NavbarMobileMenu(props) {
  const navigate = useNavigate()
  const navigateRoute = route => {
    if (props.toggled) props.onToggle()
    navigate(route)
  }

  return (
    <div className="hamburger-menu-wrapper">
      <div className="navlink-mobile">
        <div onClick={() => navigateRoute('/')}>
          Home
        </div>
      </div>
      <div className="navlink-mobile">
        <div onClick={() => navigateRoute('/resume')}>
          Resume
        </div>
      </div>
      <div className="navlink-mobile">
        <div onClick={() => navigateRoute('/projects')}>
          Projects
        </div>
      </div>
    </div>
  )
}

export default function Navigation() {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar-desktop">
          <NavbarDesktop/>
        </div>
        <div className="navbar-mobile">
          <NavbarMobile />
        </div>
      </Container>
    </nav>
  )
}
