import Introduction from "./components/Introduction"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {

  return (
   
     <>
        <header>
            <ul className="header-container">
                <li className="leftHeader"><a className="text-header roboto-title" href="#">Logo</a></li>
                <li className="rightHeader"><a className="text-header roboto-title" href="#projects">Projects</a></li>
                <li className="rightHeader"><a className="text-header roboto-title" href="#about">About</a></li>
            </ul>
        </header>

        <div className="row-intro">
            <Introduction/>
        </div>

        <div id="about" className="about-body">
            <About/>
        </div>

        <div id="projects" className="project-body">
            <Projects/>
        </div>
    
    </>
  )
}

export default App
