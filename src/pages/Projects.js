import { useState, useContext } from "react"
import { AppContext } from "../context"
import { ArtAPI } from "../components/embeddedProjects/ArtAPI"
import reactor from "./reactor.png"
import lion from "./lion.png"
import yellowGraph from "../images/dataviz/yellowGraph.png"
import meetups from "../images/meetups/meetups.png"
import warmUI from "./warmUI.png"
import poster from "./poster.png"

import projectsData from "./projectsData.js"
import "./ProjectsPage.css"

function ProjectPageContent(props) {
  const imgPath = props.image
  const styles = {
    heroBackground: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.44), rgba(0, 0, 0, 0.9)), url(${imgPath})`,
      backgroundPosition: "center",
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
      <div className="project-content-description-title">
        <h2>
          <u>
            Description
          </u>
        </h2>
      </div>
      <div className="project-content-description">
        <p>
          {props.description}
        </p>
      </div>
      {props.href && (
        <div>
          <a target="__blank" href={props.href}>
            Click to {props.isLive ? "redirect": "launch project"}
          </a>
        </div>
      )}
    </div>
  )
}

function Robots() {
  return (
    <ProjectPageContent
      title="Robots"
      image="https://images.unsplash.com/photo-1563396983906-b3795482a59a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
      description={`Just a fun app under construction about controlling robots. Built in React, currently simply move robots from on department to another. Expanding into robot types and styling next`}
      href="https://helpful-elf-58078b.netlify.app/"
    />
  )
}

function TDDSundaes() {
  return (
    <ProjectPageContent
      title="TDD Sundaes"
      image="https://plus.unsplash.com/premium_photo-1661427159078-9d85039e99b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
      description={`Sundaes is a purely Test Driven Developed site. There is no backend storage for orders, but the scoop and topping options data is being fetched to showcase async testing. You can clone the repo here https://github.com/ahza64/jest-sundae and run the tests locally, or just simply play with the app and read the tests. Tests include mock servers and error handlers. This is deployed on Heroku, so may need up to 10sec to boot up.`}
      href="https://precious-kitten-cf9a7b.netlify.app"
    />
  )
}


function Meetups() {
  return (
    <ProjectPageContent
      title="Meetup App"
      image={meetups}
      description="Meetups uses firebase to hold the meetup, and React Hooks to build and control the website. Add a new meetup, see all the saved meetups, select favorite meetups for that visit, and see all favorites for that visit."
      href="https://jade-travesseiro-5ea9a9.netlify.app/"
    />
  )
}

function Reactor() {
  return (
    <ProjectPageContent
      title="Reactor App"
      image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      description="Using custom react hooks and pubsub, post blogs and give emoji reactions all tagged with your username, showcasing the reducer pattern, replacing the need for the Redux library. There is no backend store, but you can ping multiple user names and interact and see the frontend Reducer storage pattern in action."
      href="https://vibrant-darwin-54679b.netlify.app/"
    />
  )
}

function DataViz() {
  return (
    <ProjectPageContent
      title="Data Viz"
      image={yellowGraph}
      description="This is a mostly backend (fullstack) application I’ve built. This version uses React.js Hooks, Charts.js, and the wargaming API. Sadly due to a microsoft buyout and mongodb/mongolabs migration, this application is being rebuilt back to its glory days, but now with hooks instead of OOP. The original app used: node.js, express.js, mongoose, mongoDB."
      href="https://dazzling-chaja-e6191e.netlify.app/"
    />
  )
}

function WarmUI() {
  return (
    <ProjectPageContent
      title="Warm UI"
      image={warmUI}
      description="This is an extensive layout I've done with warm and feminine UI/styling"
      href="https://exquisite-ganache-3facd1.netlify.app/"
    />
  )
}

function Poster() {
  return (
    <ProjectPageContent
      title="Poster"
      image={poster}
      description="Post some messages using React with nested routes and loader with a dummy backend in node."
      href="https://monumental-smakager-e6e9b2.netlify.app/"
    />
  )
}

const projectsMap = {
  'ART-API': <ArtAPI />,
  'WARM-UI': <WarmUI />,
  'ROBOTS': <Robots />,
  'TDD-SUNDAES': <TDDSundaes />,
  'MEETUPS': <Meetups />,
  'REACTOR': <Reactor />,
  'DATA-VIZ': <DataViz />,
  'POSTER': <Poster />
}

const intialState = {
  projectsData,
  selected: projectsData[0]
}

export default function ProjectsPage() {
  const [state, setState] = useState({...intialState})
  const [context] = useContext(AppContext)
  const toggleProject = (name) => {
    const [selected] = state.projectsData.filter(project => project.name === name)

    setState((prevState) => ({
      ...prevState,
      selected
    }))
  }

  return (
    <div className="projects-page-wrapper">
      <div className="projects-navigation-title">Project views</div>
      <div className="project-navigation">
        {projectsData.map((project) => (
          <button 
            className={`project-btn ${context.theme}`} 
            active={state.selected.name === project.name ? "true" : "false"} 
            key={project.id} onClick={() => toggleProject(project.name)}
          >
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
