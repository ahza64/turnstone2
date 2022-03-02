import serviceCardsData from './serviceCardsData.js'
import './ServiceCards.css'

function ServiceCardItem({ service }) {
  return (
    <div>
      {service.title}
    </div>
  )
}

function ServiceCard({ item }) {
  return (
    <div>
      <div>
        <h4>
          {item.title}
        </h4>
      </div>
      <div>
        {item.services.map((service) => (
          <ServiceCardItem key={service.id} service={service}/>
        ))}
      </div>
    </div>
  )
}

export default function ServiceCards() {
  console.table(serviceCardsData)
  return (
    <div className="service-cards-wrapper">
      {serviceCardsData.map((item) => (
        <ServiceCard key={item.id} item={item}/>
      ))}
    </div>
  )
}
