import NavBar from "./components/Navbar";
import {Banner} from "./components/Banner"
import {Skills} from "./components/Skills"
import {Projects} from "./components/Projects"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      {/* <Skills/> */}
    </div>
  );
}

export default App;
