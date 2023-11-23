import Navbar from "./Components/NavBar/NavBar/navbar";
import Intro from "./Components/Intro/intro";
import Skills from "./Components/Skills/skill";
import Works from "./Components/Works/works";
import Education from "./Components/Education/education";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Education/>
      <Footer/>
      
    </div>
  );
}

export default App;
