import { Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './Tronitron.css'

export default function Tronitron() {

  return (
    <Container>
      <div className="tronitron-wrapper">
        <div>
          <h1>Justin Pettit</h1>
        </div>
        <h3>Software Engineer and Full Stack Web Developer</h3>
        <div>
          <p>Specializing in React and node.js. Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare justo eget quam sagittis, pulvinar finibus quam dignissim. Vestibulum ullamcorper cursus ligula, a luctus felis tempus ut. Suspendisse imperdiet ligula tincidunt nunc ullamcorper vestibulum. Duis porttitor sem a fermentum dapibus. Aliquam egestas tellus vitae faucibus lacinia. Aenean facilisis congue dolor.</p>
        </div>
        <div className="btn-wrapper">
          <div>
            <Button>Main</Button>
          </div>
          <div>
            <Button variant="success">Resume</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
