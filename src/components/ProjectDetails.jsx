import github from "../assets/github.svg"
import website from "../assets/website.svg"

export default function ProjectDetails(props){
    return(
        <div className='project-details-holder'  >
             <section className="project-details" onMouseLeave={()=>props.handleMouse(props.id)}>
                <img src={props.data.picture} alt="app-picture" />
                <div className="detail--page">
                    <div className="project--text">
                        <h4>{props.data.title}</h4>
                        <p>{props.data.description}
                        </p>
                    </div>
                    <div className="project--technologies">
                        <h5 >Technologies Used:</h5>
                        <p>{props.data.technologies}</p>
                    </div>
                    <div className="project--links">
                        <div className="project--link">
                            <img src={github} alt="" />
                            <a href={props.data.github}>GitHub</a>
                        </div>
                        <div className="project--link">
                            <img src={website} alt="" />
                            <a href={props.data.website}>Live Website</a>
                        </div>
                    </div>
                </div>
             </section>
        </div>
    )
}