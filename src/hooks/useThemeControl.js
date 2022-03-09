import { useContext } from "react"
import { AppContext } from "../context"

export default function useThemeControl() {
  const [state, setState] = useContext(AppContext)

  const toggleTheme = () => {
    const map = { light: "dark", dark: "light" }
    setState((prevState) => ({
      ...prevState,
      theme: map[state.theme]
    }))
  }

  return {
    toggleTheme
  }
}
