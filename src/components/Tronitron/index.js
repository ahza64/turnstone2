import { Suspense, useContext } from 'react'
import { Container } from "semantic-ui-react"
import { AppContext } from "../../context"

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { SiGithub, SiLinkedin } from "react-icons/si"
import Model from './3dselfmodel'
import epictetus from './epictetus.png'

import tronitronData from "./tronitronData"
import './Tronitron.css'

export default function Tronitron() {
  const [context] = useContext(AppContext)
  return (
    <div className="tronitron-wrapper">
      <div className="avatar-grid">
        <div className="avatar-text-wrapper">
          <div>
            <h1>TurnStone</h1>
          </div>
          <div>
            <h2>"Leave no stone unturned"</h2>
          </div>
          <div>
            <h3>Software Engineer and Full Stack Web Developer</h3>
          </div>
          <div className="avatar-social">
            <div className="tron-linkedin-control">
              <a className={`tron-linkedin ${context.theme}`} target="__blank" href="https://www.linkedin.com/in/justinmichaelpettit/">
                <SiLinkedin/>
              </a>
            </div>
            <div className="tron-github-control">
              <a className={`tron-github ${context.theme}`} target="__blank" href="https://github.com/ahza64">
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
            <ambientLight intensity={0.25} />
            <ambientLight intensity={0.25} />
            <directionalLight intensity={0.5} />
            <Suspense fallback={null}>
              <Model position={[0.025, -0.9, 0]} />
            </Suspense>
            <OrbitControls enableZoom={false}/>
          </Canvas>
        </div>
      </div>
      <div className="epictetus-wrapper">
        <img src={epictetus} alt="epictetus" />
        <div>
          <h3>
            "You cannot learn, what you think you already know"
          </h3>
          <h2>
            -Epictetus
          </h2>
        </div>
      </div>
      <Container>
        <div className="introduction">
            <h3>Introduction</h3>
            <p>{tronitronData.introduction}</p>
        </div>
      </Container>
    </div>
  )
}
