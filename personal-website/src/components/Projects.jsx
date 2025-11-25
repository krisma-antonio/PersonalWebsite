import scribble from "../assets/images/scribble.png"
import cclogo from "../assets/images/cclogo.jpg"
import storm from "../assets/images/storm.png"

function Projects() {
    return (
        <>
            <div className="project-heading">
                 <h1 className="inter-title">Projects</h1>                    
                <img className="scribble-img" src={scribble} alt="scribble"></img>
            </div>
            <div className="project-grid">
                <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/kiah1013/ChromaCrew">
                        <img className="project-img" src={cclogo} alt="cclogo"></img>
                    </a>
                    <h1 className="inter-bold">Chroma Critters</h1>
                    <p className="inter-paragraph">Chroma Critters is an animal-themed coloring book app. Chroma Critters 
                        is meant to help people of all ages relax and engage in a creative activity.</p>
                    <br/>
                    <p className="inter-paragraph">Swift</p> 
                    <p className="inter-paragraph">Firebase</p> 
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/krisma-antonio/natural-event-tracker">
                        <img className="project-img" src={storm} alt="cclogo"></img>
                    </a>
                    <h1 className="inter-bold">Natural Event Tracker</h1>
                    <p className="inter-paragraph">Natural Event Tracker is a web app whose objective is to enhance individuals’ 
                        ability to stay informed about past and active natural events.</p>
                    <br/>
                    <p className="inter-paragraph">React.js</p> 
                    <p className="inter-paragraph">Node.js</p> 
                    <p className="inter-paragraph">Javascript</p> 
                    <p className="inter-paragraph">NASA & USGS API</p> 
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/krisma-antonio/plant-crud-website">
                        <img className="project-img" src={cclogo} alt="cclogo"></img>
                    </a>
                    <h1 className="inter-bold">Plant Database System</h1>
                    <p className="inter-paragraph">A simple CRUD web application that allows users to maintain database of plants.</p>
                    <br/><br/><br/><br/>
                    <p className="inter-paragraph">Python</p> 
                    <p className="inter-paragraph">Flask</p> 
                    <p className="inter-paragraph">sqlite</p> 
                </div>
            </div>
        </>
    )
}

export default Projects