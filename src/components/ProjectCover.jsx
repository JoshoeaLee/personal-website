
export default function ProjectCover(props){

    return (
        <div onMouseEnter={()=>props.handleMouse(props.id)}  >
             <section className="project-cover">
                <img className="project--icon" src={props.data.icon} alt="bird" />
                <h3 className="project--title">{props.data.title}</h3>
             </section>
        </div>
    )
}