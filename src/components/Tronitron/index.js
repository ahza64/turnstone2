import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './Tronitron.css'

export default function Tronitron() {

  return (
    <Container>
      <div className="tronitron-wrapper">
        <div>
          <h3>Justin Pettit Software Engineer</h3>
        </div>
        <div>
          <p>Specializing in React and node.js. Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        </div>
        <div className="btn-wrapper">
          <div>
            <Button>Main</Button>
          </div>
          <div>
            <Button variant="secondary">Resume</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
