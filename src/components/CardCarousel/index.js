import React from 'react'
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

  const [state, setState] = React.useState({ ...initialState })

  const handleChange = item => {
    const [selected] = state.list.filter(record => record.id === item.id)
    setState(prevState => ({
      ...prevState,
      selected
    }))
  }

  return (
    <div className="--card">
      <div className="card-title">
        <h4>
          {item.title}
        </h4>
      </div>
      <div>
        <div className="card-title-wrapper">
          <div className="card-icon">
            {state.selected.icon}
          </div>
          <div className="card-icon-title">
            {state.selected.title}
          </div>
        </div>
        <div className="card-desc-wrapper">
          {state.selected.description}
        </div>
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
    <>
      <div>
        <h1>
          Services
        </h1>
      </div>
      <div className="service-cards-wrapper">
        {serviceCardsData.map((item) => (
          <CarouselCard key={item.id} item={item}/>
        ))}
      </div>
    </>
  )
}
