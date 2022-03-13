import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Hamburger from "hamburger-react"
import { AppContext } from "../../context"
import useThemeControl from "../../hooks/useThemeControl"
import { Button, Checkbox, Container } from "semantic-ui-react"

import stoneImg from "./stone2.png"
import "./Navbar.css"

function NavbarDesktop() {
  return (
    <NavbarLinksDesktop/>
  )
}

function TurnStone() {
  const { toggleTheme } = useThemeControl()
  const [context] = useContext(AppContext)
  return (
      <img className={`turn-stone ${context.theme}`}  onClick={toggleTheme} src={stoneImg} alt="TurnStone"/>
  )
}

function NavbarLinksDesktop() {
  const [context] = useContext(AppContext)
  const themeMode = context.theme.charAt(0).toUpperCase() + context.theme.slice(1)
  return (
    <div className="navbar-links-wrapper">
      <div className="navbar-icon">
        <TurnStone/>
        <div className="turn-stone-label">
           The Magic TurnStone
        </div>
      </div>
      <div className="nav-links-wrapper">
        <div className="navlink">
          <Link to="/">
            <Button basic color='grey'>
              Home
            </Button>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/resume">
            <Button basic color="grey">
              Resume
            </Button>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/projects">
            <Button basic color='grey'>
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
  const [context] = useContext(AppContext)
  return (
    <nav className={`navbar ${context.theme}`}>
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
