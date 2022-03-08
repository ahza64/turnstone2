import { Container } from "react-bootstrap"
import { MdOutlineConstruction } from "react-icons/md"
import "./ProjectsPage.css"

export default function ProjectsPage() {
  return (
    <Container>
      <div className="projects-page-wrapper">
        <div>
          <MdOutlineConstruction className="icon-large"/>
        </div>
        <div>
          <h4>
            Projects Page is under contruction
          </h4>
        </div>
      </div>
    </Container>
  )
}

// const solution = (arr) => {
//     if (!arr) return "";
//     if (arr.length === 0) return "";
//     const sum = (arr, idx) => {
//         if (idx - 1 < arr.length) {
//             if (arr[idx - 1] === -1) return 0;
//             return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
//         }
//         return 0;
//     };
//     const left = sum(arr, 2);
//     const right = sum(arr, 3);
//     return (left == right) ? "" : (left > right ? "Left" : "Right");
// };
