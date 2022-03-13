import { useContext } from 'react'
import { AppContext } from "../../context"
import useThemeControl from "../../hooks/useThemeControl"
import { Checkbox } from "semantic-ui-react"


import "./Footer.css"

export default function Footer() {
  function ThemeSwitch() {
    const [state] = useContext(AppContext)
    const { toggleTheme } = useThemeControl()
    const isChecked = state.theme === "dark"
    return (
      <Checkbox toggle onChange={toggleTheme} checked={isChecked}/>
    )
  }

  return (
    <nav className="footer-wrapper">
      <div className="theme-switch">
        <ThemeSwitch/>
      </div>
      <div>
        turnstone
      </div>
      <div>
        all rights reserved
      </div>
      <div>
        2022
      </div>
    </nav>
  )
}
