import { Button, Container } from 'react-bootstrap';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SiGithub, SiLinkedin } from "react-icons/si"
import Model from './3dselfmodel'
import './Tronitron.css'


export default function Tronitron() {

  return (
    <Container>
      <div className="tronitron-wrapper">
        <div className="avatar-grid">
          <div className="avatar-text">
            <div>
              <h1>Justin Pettit</h1>
            </div>
            <div>
              <h3>Software Engineer and Full Stack Web Developer</h3>
            </div>
            <div className="avatar-social">
              <div>
                <SiLinkedin/>
              </div>
              <div>
                <SiGithub/>
              </div>
            </div>
          </div>
          <div>
            <Canvas
              camera={{ position: [2, 0, 12.25], fov: 10 }}
              style={{
                backgroundColor: 'transparent',
                width: 'auto',
                height: '600px',
              }}
              >
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} />
              <Suspense fallback={null}>
                <Model position={[0.025, -0.9, 0]} />
              </Suspense>
              <OrbitControls enableZoom={false}/>
            </Canvas>
          </div>
        </div>
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
