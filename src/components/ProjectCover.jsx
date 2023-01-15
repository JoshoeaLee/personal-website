
export default function ProjectCover(props){

    return (
        <div className='project-cover-holder'   >
             <section className="project-cover" onMouseEnter={()=>props.handleMouse(props.id)}>
                <img className="project--icon" src={props.data.icon} alt="bird" />
                <h3 className="project--title">{props.data.title}</h3>
             </section>
        </div>
    )
}