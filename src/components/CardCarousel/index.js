import { useState, useContext } from 'react'
import { AppContext } from "../../context"
import { Container, Card } from "semantic-ui-react"


import serviceCardsData from './serviceCardsData.js'
import './CarouselCards.css'

function CardDot(props) {
  const cardClassName = props.selectedId === props.item.id ? 'card-dot-selected' : 'card-dot'
  return (
    <div
      className={cardClassName}
      onClick={() => props.onHandleChange(props.item)}/>
  )
}

function CarouselCardItem({ service }) {
  return (
    <div>
      {service.title}
    </div>
  )
}

function CarouselCard({ item }) {
  const initialState = {
    selected: item.services[0],
    list: item.services
  }
  const [state, setState] = useState({ ...initialState })
  const [context] = useContext(AppContext)

  const handleChange = item => {
    const [selected] = state.list.filter(record => record.id === item.id)
    setState(prevState => ({
      ...prevState,
      selected
    }))
  }

  return (
    <div className={`card-wrapper ${context.theme}`}>
      <div>
       {item.title}
     </div>
     <div className="card-icon-title">
      <div>
        {state.selected.icon}
      </div>
      <div>
        {state.selected.title}
      </div>
     </div>
     <div>
      {state.selected.description}
     </div>
        <div className="dot-wrapper">
          {state.list.map((item) => (
            <CardDot
              key={item.id}
              item={item}
              selectedId={state.selected.id}
              onHandleChange={handleChange}/>
          ))}
        </div>
    </div>
  )
}

export default function CarouselCards() {
  return (
    <Container>
      <div>
        <h1>
          Services
        </h1>
      </div>
      <div className="card-grid">
        {serviceCardsData.map((item) => (
          <CarouselCard key={item.id} item={item}/>
        ))}
      </div>
    </Container>
  )
}
