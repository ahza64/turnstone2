import { useState, useContext } from "react"
import { AppContext } from "../../context"
import { Modal, Header, Icon } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"

import "./EmailPortal.css"

function CheckBox(props) {
  return (
    <>
      <input className="checkbox1" type="checkbox" onChange={() => props.onHandleChange()}/>{` `}
      <label htmlFor="recruiter">{` I am a technical recruiter.`}</label>
    </>
  )
}

function EmailModal(props) {
  const [context] = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const navigateRoute = route => {
    setOpen(false)
    navigate(route)
  }

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<button className={`project-btn ${context.theme}`} disabled={!props.isChecked}>My Email Address</button>}
    >
      <Header icon>
        <Icon name='archive' />
        Reach me at my personal email
      </Header>
      <Modal.Content>
        <h1 className="email">
          justinmichaelpettit@gmail.com
        </h1>
      </Modal.Content>
      <Modal.Actions>
        <button className={`email-nav-btn project-btn ${context.theme}`} onClick={() => navigateRoute('/')}>
          Home
        </button>
        <button className={`email-nav-btn project-btn ${context.theme}`} onClick={() => navigateRoute('/resume')}>
          Resume
        </button>
        <button className={`email-nav-btn project-btn ${context.theme}`} onClick={() => navigateRoute('/projects')}>
          Projects
        </button>
      </Modal.Actions>
    </Modal>
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
      <div>
        <EmailModal isChecked={isChecked}/>
      </div>
    </div>
  )
}
