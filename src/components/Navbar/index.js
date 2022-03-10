import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Hamburger from "hamburger-react"
import { AppContext } from "../../context"
import useThemeControl from "../../hooks/useThemeControl"
import "./Navbar.css"

function NavbarDesktop() {
  return (
    <NavbarLinksDesktop/>
  )
}

function ThemeSwitch() {
  const [state] = useContext(AppContext)
  const { toggleTheme } = useThemeControl()
  const nextTheme = state.theme === "dark" ? "light" : "dark"
  const isChecked = state.theme === "dark"
  return (
    <>
      <input type="checkbox" onChange={toggleTheme} checked={isChecked}/>
      <label htmlFor="theme"></label>
    </>
  )
}

function NavbarLinksDesktop() {
  const [state] = useContext(AppContext)
  const themeMode = state.theme.charAt(0).toUpperCase() + state.theme.slice(1)
  return (
    <div className="navbar-links-wrapper">
      <div className="navbar-icon">
        <div>
          TurnStone {themeMode}
        </div>
        <div className="theme-switch">
          <ThemeSwitch/>
        </div>
      </div>
      <div className="nav-links-wrapper">
        <div className="navlink">
          <Link to="/">
            <button variant="outline-secondary">
              Home
            </button>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/resume">
            <button variant="outline-secondary">
              Resume
            </button>
          </Link>
        </div>
        <div className="navlink">
          <Link to="/projects">
            <button variant="outline-secondary">
              Projects
            </button>
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
      <div className="navbar-desktop">
        <NavbarDesktop/>
      </div>
      <div className="navbar-mobile">
        <NavbarMobile />
      </div>
    </nav>
  )
}
