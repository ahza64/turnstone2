import { Modal, Button, Container } from "react-bootstrap"
import { useState } from "react"
import "./ProjectsPortal.css"

function ModalTrigger(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" disabled={props.isChecked === false} onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

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
    <Container>
      <div className="projects-portal-wrapper">
        <div className="projects-headline">
          <h2>
             Click the checkbox below to unlock the button to open a modal portal to the projects page.
          </h2>
        </div>
        <div className="checkbox-wrapper">
          <CheckBox onHandleChange={handleChange} isChecked={isChecked}/>
        </div>
        <div>
          <ModalTrigger isChecked={isChecked}/>
        </div>
      </div>
    </Container>
  )
}
