import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Intro from './components/About/about';
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/experience";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <Hero/>
          <Intro/>
          <Experience/>
          <br/>
          <Contact/>
      </header>
    </div>
  );
}

export default App;
