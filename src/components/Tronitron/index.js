import { Suspense } from 'react'
import { Container } from 'react-bootstrap'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SiGithub, SiLinkedin } from "react-icons/si"
import Model from './3dselfmodel'
import tronitronData from "./tronitronData"
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
              <div className="tron-linkedin-control">
                <a className="tron-linkedin" target="__blank" href="https://www.linkedin.com/in/justinmichaelpettit/">
                  <SiLinkedin/>
                </a>
              </div>
              <div className="tron-github-control">
                <a className="tron-github" target="__blank" href="https://github.com/ahza64">
                  <SiGithub/>
                </a>
              </div>
            </div>
          </div>
          <div className="avatar-canvas">
            <Canvas
              camera={{ position: [10, 7, 12.25], fov: 7 }}
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
          <p>{tronitronData.introduction}</p>
        </div>

      </div>
    </Container>
  )
}
