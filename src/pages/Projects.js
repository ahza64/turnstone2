import { useState } from "react"
import { MdOutlineConstruction } from "react-icons/md"
import reactor from "./reactor.png"
import lion from "./lion.png"

import projectsData from "./projectsData.js"
import "./ProjectsPage.css"

function ArtAPI() {
  return (
    <div className="under-construction">
      <h1>
        Art API Project Is Under Construction, see above links for earlier renditions of skills
      </h1>
    </div>
  )
}

function ProjectPageContent(props) {
  const imgPath = props.image
  const styles = {
    heroBackground: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.44), rgba(0, 0, 0, 0.9)), url(${imgPath})`,
      minHeight: "200px",
      minWidth: "100vw",
      backgroundSize: "cover",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
  }

  return (
    <div className="project-content">
      <div style={styles.heroBackground}>
        <div>
          <h4>
            {props.title}
          </h4>
        </div>
      </div>
      <div>
        <p>
          {props.description}
        </p>
      </div>
      <div>
        <a href={props.href}>
          Click to be redirected
        </a>
      </div>
    </div>
  )
}

function Reactor() {
  return (
    <ProjectPageContent
      title="Reactor App (hooks only)"
      image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      description="using custom react hooks and pubsub, post blogs and give emoji reactions all tagged with your user name."
      href="https://vibrant-darwin-54679b.netlify.app/"
    />
  )
}

function DataViz() {
  return (
    <ProjectPageContent
      title="DataViz (interm with home app external APIs)"
      image="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      description="actually a home page app for the time being, several react custom hooks component features divided by line breaks. dynamic data feed controls. etc..."
      href="https://relaxed-hypatia-11c312.netlify.app/"
    />
  )
}

const projectsMap = {
  'ART-API': <ArtAPI />,
  'REACTOR': <Reactor />,
  'DATA-VIZ': <DataViz />
}

const intialState = {
  projectsData,
  selected: projectsData[0]
}

export default function ProjectsPage() {
  const [state, setState] = useState({...intialState})
  const toggleProject = (name) => {
    const [selected] = state.projectsData.filter(project => project.name === name)

    setState((prevState) => ({
      ...prevState,
      selected
    }))
  }

  return (
    <div className="projects-page-wrapper">
      <div className="project-navigation">
        {projectsData.map((project) => (
          <button className="project-btn" key={project.id} onClick={() => toggleProject(project.name)}>
            {project.name}
          </button>
        ))}
      </div>
      <div>
        {projectsMap[state.selected.name]}
      </div>
    </div>
  )
}
