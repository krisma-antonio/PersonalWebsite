import profile from "../assets/images/profile.png"

function Introduction() {
    return(
        <>
            <div className="introduction">
                <h1 className="inter-intro">Krisma Antonio</h1>
                <p className="inter-paragraph">I build software applications that inspire me and create innovative solutions to real-world problems.</p>
            </div>
            <div className="center-img">
                <img className="image-intro" src={profile} alt="pic"></img>
            </div>
        </>
    )
}

export default Introduction