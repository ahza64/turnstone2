import { useState, useEffect, useRef } from "react"
import { Input, Button, Modal, Image } from "semantic-ui-react"
import { MdOutlineConstruction } from "react-icons/md"
import reactor from "./reactor.png"
import lion from "./lion.png"

import projectsData from "./projectsData.js"
import "./ProjectsPage.css"

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
      {props.href && (
        <div>
          <a target="__blank" href={props.href}>
            Click to launch project
          </a>
        </div>
      )}
    </div>
  )
}

function SearchComponent(props) {
  return (
    <Input
      placeholder='Search...'
      onChange={props.onHandleSearchChange}
      size="massive"
    />
  )
}

function ellipsify(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "..."
  }
  return str
}

function ArtCardItem(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const baseUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.itemID}`
    fetch(baseUrl, {method: "GET"})
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res
    })
    .then((data) => {
      setData(data)
    })
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [props.itemID])
  console.log("data", data);

  return (
    <div>
    { data &&
      <div  className="art-card">
        <div>
          <h1>
            {ellipsify(data.title, 20)}
          </h1>
        </div>
        <div>
          {data.objectDate}
        </div>
        <div>
          <h4>
            {data.repository}
          </h4>
        </div>
        <div>
          <ArtModal data={data}/>
        </div>
      </div>
    }
    </div>
  )
}

function ArtModal(props) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button fluid size="mini">More...</Button>}
    >
      <Modal.Header>
        {props.data.title}
      </Modal.Header>
      <Modal.Content>
        <div className="modal-art-grid">
          <div>
            {props.data.primaryImage ? (
              <Image size="medium" src={props.data.primaryImage}/>
            ) : (
              <div>
                No Image
              </div>
            )}
          </div>
          <div className="modal-text">
            <div>
              <h3>
                {props.data.creditLine}
              </h3>
            </div>
            <div>
            {props.data.constituents && props.data.constituents.map((item, idx) => (
              <div key={idx}>
                <strong>
                  role: {item.role} name: {item.name}
                </strong>
              </div>
            ))}
            </div>
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  )
}

function ArtAPI() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchVal, setSearchVal] = useState("")

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  }

  const onSubmitSearch = () => {
    fetchSetData(searchVal)
  }

  const fetchSetData = (query) => {
    const baseUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
    fetch(baseUrl, {method: "GET"})
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res
    })
    .then((data) => {
      const data1 = data.objectIDs.slice(0, 20)
      data.objectIDs = data1
      data.total = data.objectIDs.length
      setData(data)
    })
    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <ProjectPageContent
        title="Art API"
        image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80"
        description=""
      />
      <div className="search-form">
        <div>
          <SearchComponent
            onHandleSearchChange={handleSearchChange}
            />
        </div>
        <div>
          <Button size="massive" onClick={onSubmitSearch}>
            Submit
          </Button>
        </div>
      </div>
      {data && (
        <div className="art-grid">
          {data.objectIDs.map((item, idx) => (
            <ArtCardItem key={idx} itemID={item} />
          ))}
        </div>
      )}
    </>
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
