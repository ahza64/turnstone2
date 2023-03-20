import { useState, useContext } from "react"
import { AppContext } from "../../../context"
import { ArtCardItem } from "./ArtCardItem"
import { Input, Button } from "semantic-ui-react"

function SearchComponent(props) {
  return (
    <Input
      placeholder='Search for Art'
      onChange={props.onHandleSearchChange}
      size="massive"
      value={props.searchVal}
    />
  )
}

export function ArtAPI() {
  const [context] = useContext(AppContext)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchVal, setSearchVal] = useState("flowers")
  const [hasNoResults, setHasNoResults] = useState(null)

  const clearSearchResults = () => {
    setHasNoResults(null)
    setSearchVal('')
  }

  const handleSearchChange = (e) => {
    setSearchVal(e.target.value);
  }

  const onSubmitSearch = () => {
    fetchSetData(searchVal)
  }

  const handleSearchKeyPress = (event) => {
    if(event.key === 'Enter'){
      fetchSetData(searchVal)
    }
  }

  const fetchSetData = (query) => {
    setLoading(true)
    setData(null)
    const baseUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`
    fetch(baseUrl, {method: "GET"})
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res
    })
    .then((data) => {
      if (data.total === 0) {
        setHasNoResults(true)
      } else {
        const data1 = data.objectIDs.slice(0, 10)
        data.objectIDs = data1
        data.total = data.objectIDs.length
        setHasNoResults(false)
        setData(data)
      }
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
        description="This component bakedin Application (“feature”) is built into this portfolio website. Mostly showcasing fetch useEffect with a bunch of useState and data handling and multiple React.js functionality structures, I used the boston met museum’s API to request up to 20 data selections from a search query, to fill a list of art piece show cards with name and date with a button to open a modal displaying an image and maker and donator."
      />
      <img src="" alt=""/>
      <div className="search-form">
        <div  onKeyPress={handleSearchKeyPress}>
          <SearchComponent
            searchVal={searchVal}
            onHandleSearchChange={handleSearchChange}
            />
        </div>
        <div>
          <Button disabled={loading} size="massive" onClick={onSubmitSearch}>
            Submit
          </Button>
        </div>
      </div>
      {hasNoResults && (
        <div className="art-no-results">
          <div>
            No Results Were Found
          </div>
          <div>
            <button className={`project-btn ${context.theme}`} onClick={clearSearchResults}>
              Clear Search
            </button>
          </div>
        </div>
      )}
      {loading && (
        <div className="art-no-results">
          Fetching data from the Art API...
        </div>
      )}
      {data && (
        <div className="art-grid">
          {data.objectIDs.map((item, idx) => (
            <ArtCardItem key={item} itemID={item} />
          ))}
        </div>
      )}
    </>
  )
}

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
