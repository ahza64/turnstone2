import { Modal, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./ProjectsPortal.css"

function ModalTrigger(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" disabled={props.isChecked === false} onClick={handleShow}>
        See my projects, access email address.
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Feel free to reach out, or use the links to navigate to a page.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          justinmichaelpettit@gmail.com
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="outline-secondary" onClick={handleClose}>
              Home Page
            </Button>
          </Link>
          <Link to="/resume">
            <Button variant="outline-secondary" onClick={handleClose}>
              Resume
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="outline-secondary" onClick={handleClose}>
              Projects Page
            </Button>
          </Link>
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
             Click the checkbox below to unlock the button to open a modal portal to access my (more secured) email address and furthur optional navigation.
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
