import { useState, useEffect, useContext } from 'react'
import { Container, Button, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Hamburger from "hamburger-react"
import { AppContext } from "../../context"
import "./Navbar.css"

function NavbarDesktop() {
  return (
    <NavbarLinksDesktop/>
  )
}

function ThemeSwitch() {
  const [state] = useContext(AppContext)
  return (
    <Form>
      <Form.Check type="switch" label={state.theme} />
    </Form>
  )
}

function NavbarLinksDesktop() {
  return (
    <div className="navbar-links-wrapper">
      <div>
        <div>
          TurnStone
        </div>
        {/*
          <div>
            <ThemeSwitch/>
          </div>
        */}
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
