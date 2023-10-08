import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works"
import Contact from './components/Contact/Contact'
import Footer from "./components/Footer/Footer"
import WorkExp from "./components/WorkExperience/WorkExp";
import './style.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <WorkExp />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
