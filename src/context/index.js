import { createContext, useState, useEffect } from "react"

const AppContext = createContext([{}, () => {}])

function getThemeFromLocalStorage() {
  if (window.localStorage) {
    const theme = window.localStorage.getItem("stoneTheme")
    return theme ? theme : "dark"
  }
}

const initialState = {
  theme: getThemeFromLocalStorage()
}

export default function AppProvider(props) {
  const [state, setState] = useState({ ...initialState })
  useEffect(() => {
    const currentTheme = state.theme
    if (state.theme === "dark") {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
    if (state.theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
  }, [state.theme])

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext }
