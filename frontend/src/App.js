import './App.css';
import About from './components/about';
import Bio from './components/bio';
import Contact from './components/contact';
import NavBar from './components/navBar';
import Projects from './components/project';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Bio />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
