import profile from "../assets/images/profile.png"
import portrait from "../assets/images/portrait.jpg"
import scribble from "../assets/images/scribble.png"


function Main() {

    return(
    <>
        <header>
            <ul id="main">
                <li className="leftHeader"><a className="text-header roboto-title" href="#main">Logo</a></li>
                <li className="rightHeader"><a className="text-header roboto-title" href="#projects">Projects</a></li>
                <li className="rightHeader"><a className="text-header roboto-title" href="#about">About</a></li>
            </ul>
        </header>

        <div className="row-intro">
            <div className="introduction">
                <h1 className="inter-intro">Krisma Antonio</h1>
                <p className="inter-paragraph">I build software applications that inspire me and create innovative solutions to real-world problems.</p>
            </div>
            <div className="center-img">
                <img className="image-intro" src={profile} alt="pic"></img>
            </div>
        </div>

        <div id="about" className="body">
            <div className="introduction">
                <div className="heading">
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
            </div>
            <div className="center-img">
                <img className="image-about" src={portrait} alt="portrait"></img>
            </div>
        </div>

        <div id="projects" className="body">
            <div className="introduction">
                <div className="heading">
                    <h1 className="inter-title">Projects</h1>                    
                    <img className="scribble-img" src={scribble} alt="scribble"></img>
                </div>
                
            </div>
        </div>
    </>    
    )
}

export default Main
