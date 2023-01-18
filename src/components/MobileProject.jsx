//Aiming to make this significantly different to the Web Version in time

import github from "../assets/github.svg"
import website from "../assets/website.svg"

export default function MobileProject(props){
    return(
        <div className='project-details-holder mobile-holder' >
            <img src={props.data.icon} alt="" className="mobile-icon" />
             <section className="project-details">
                <div className="detail--page--mobile" >
                    <div className="project--text">
                        <h6>{props.data.title}</h6>
                        <p>{props.data.description}
                        </p>
                    </div>
                    <div className="project--technologies">
                        <h6>Technologies Used:</h6>
                        <p>{props.data.technologies}</p>
                    </div>
                    <div className="project--links">
                        <div className="project--link">
                            <a href={props.data.github}>GitHub</a>
                        </div>

                    </div>
                </div>
             </section>
        </div>
    )
}