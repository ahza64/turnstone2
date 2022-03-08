import logo from './logo.svg';
import { useContext } from 'react'
import Tronitron from './components/Tronitron'
import CardCarousel from './components/CardCarousel'
import ProjectsPortal from './components/ProjectsPortal'
import Projects from './pages/Projects'
import ResumePage from './pages/Resume'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

// --BrowserRouter Routes Route

function Home() {
  return (
    <>
      <Tronitron/>
      <CardCarousel/>
      <ProjectsPortal/>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<ResumePage/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  );
}

export default App;
