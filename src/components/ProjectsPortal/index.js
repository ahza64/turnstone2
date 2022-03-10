import { useState } from "react"
import "./ProjectsPortal.css"

function CheckBox(props) {
  return (
    <>
      <input type="checkbox" onChange={() => props.onHandleChange()}/>{` `}
      <label htmlFor="recruiter">{` I am a technical recruiter.`}</label>
    </>
  )
}

export default function ProjectsPortal() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (checked) => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="projects-portal-wrapper">
      <div className="projects-headline">
        <h2>
           Click the checkbox below to unlock the button to open a modal portal to access my (more secured) email address and furthur optional navigation.
        </h2>
      </div>
      <div className="checkbox-wrapper">
        <CheckBox onHandleChange={handleChange} isChecked={isChecked}/>
      </div>
    </div>
  )
}
