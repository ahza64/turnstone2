import { Button } from "react-bootstrap"
import { MdOutlineConstruction } from "react-icons/md"
import "./ResumePage.css"

export default function ProjectsPage() {
  return (
    <div className="resume-page-wrapper">
      <div>
        <MdOutlineConstruction className="icon-large"/>
      </div>
      <div>
        <h4>
          Resume Page is under contruction, feel free to download a resume with the button below.
        </h4>
      </div>
      <div>
        <Button href={}>
          Download Resume
        </Button>
      </div>
    </div>
  )
}
