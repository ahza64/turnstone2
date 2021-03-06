import Tronitron from './components/Tronitron'
import CardCarousel from './components/CardCarousel'
import EmailPortal from './components/EmailPortal'
import Projects from './pages/Projects'
import ResumePage from './pages/Resume'
import { Routes, Route } from "react-router-dom";
import './App.css';

// --BrowserRouter Routes Route

function Home() {
  return (
    <>
      <Tronitron/>
      <CardCarousel/>
      <EmailPortal/>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<ResumePage/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing at this route!</p>
        </main>
      }/>
    </Routes>
  );
}

export default App;
