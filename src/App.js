import logo from './logo.svg';
import Navigation from './components/Navigation'
import Tronitron from './components/Tronitron'
import CardCarousel from './components/CardCarousel'
import ProjectsPortal from './components/ProjectsPortal'

import './App.css';

function App() {
  return (
    <div>
      <Navigation/>
      <Tronitron/>
      <CardCarousel/>
      <ProjectsPortal/>
    </div>
  );
}

export default App;
