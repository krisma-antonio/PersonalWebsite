import portrait from "../assets/images/portrait.jpg"
import scribble from "../assets/images/scribble.png"

function About() {
    return(
        <>
            <div className="introduction">
                <div className="about-heading">
                    <h1 className="inter-title">About Me</h1>
                    <img className="scribble-img" src={scribble} alt="scribble"></img>
                </div>
                <p className="inter-paragraph">
                    Hi! My name is Krisma and I graduated from California State University Channel Islands in 2025 
                    with a Bachelor's degree in Computer Science and earned Magna Cum Laude honors.
                    <br/><br/>
                    Creating projects that brings out my creativity is what drives me to build web applications. 
                    I recently built a website that tracks natural events using NASA's API, the USGS API, and Mapbox for map visualization. 
                    This project inspired me to create more programs that raise awareness about Earth's natural events, and it also 
                    sparked my interest in developing both front-end and back-end web applications.
                    <br/><br/>
                    In my free time, I enjoy drawing, hiking, photography, and traveling. These hobbies inspire my creativity when building 
                    and designing projects. In most of my projects, I even like to create my own icons by drawing them.
                    <br/><br/>
                    Here are some of the technologies I have experience using in:
                </p>
                <div className="tech-container inter-paragraph">
                        <ul>
                        <li className="tech-list">Python</li> 
                        <li className="tech-list">Javascript</li> 
                        <li className="tech-list">C</li>
                        </ul>
                        <ul>
                        <li className="tech-list">React</li> 
                        <li className="tech-list">MySQL</li> 
                        <li className="tech-list">Node.js</li>
                        </ul>
                </div>
            </div>
            <div className="center-img">
                <img className="image-about" src={portrait} alt="portrait"></img>
            </div>
        </>
    )
}

export default About