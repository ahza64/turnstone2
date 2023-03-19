import { MdOutlineConstruction } from "react-icons/md"
import "./ResumePage.css"

export default function ResumePage() {
  return (
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
        <a className="download-resume" href="https://github.com/ahza64/turnstone2/raw/master/Hooks%20CV4.docx">
          Download Resume
        </a>
      </div>
    </div>
  )
}
