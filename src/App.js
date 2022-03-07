import logo from './logo.svg';
import Tronitron from './components/Tronitron'
import CardCarousel from './components/CardCarousel'
import ProjectsPortal from './components/ProjectsPortal'
import Projects from './pages/Projects'
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

function Resume() {
  return (
    <div>
      Resume
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  );
}

export default App;
