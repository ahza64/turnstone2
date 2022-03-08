import { Button, Container } from "react-bootstrap"
import { MdOutlineConstruction } from "react-icons/md"
import "./ResumePage.css"

export default function ResumePage() {
  return (
    <Container>
      <div className="resume-page-wrapper">
        <div>
          <MdOutlineConstruction className="icon-large"/>
        </div>
        <div>
          <h4>
            The Resume Page is under contruction, feel free to download a resume with the button below.
          </h4>
        </div>
        <div>
          <Button href="https://github.com/ahza64/turnstone2/raw/master/resume%20hooks%2012_6%20(2).docx">
            Download Resume
          </Button>
        </div>
      </div>
    </Container>
  )
}
