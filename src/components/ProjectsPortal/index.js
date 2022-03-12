import { useState } from "react"
import { Modal, Button, Header, Icon } from "semantic-ui-react"

import "./ProjectsPortal.css"

function CheckBox(props) {
  return (
    <>
      <input type="checkbox" onChange={() => props.onHandleChange()}/>{` `}
      <label htmlFor="recruiter">{` I am a technical recruiter.`}</label>
    </>
  )
}

function ModalExampleBasic() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button>Basic Modal</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Archive Old Messages
      </Header>
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
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
      <ModalExampleBasic/>
      </div>
    </div>
  )
}
