import { useState, useEffect } from "react"
import { ArtModal } from "./ArtModal"

export function ArtCardItem(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hasNoResults, setHasNoResults] = useState(null)

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
      setHasNoResults(true)
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [props.itemID])

  return (
    <div>
    { hasNoResults &&
      <div className="art-no-results">
        The API gave back an error for this art Piece
      </div>
    }
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

function ellipsify(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "..."
  }
  return str
}
