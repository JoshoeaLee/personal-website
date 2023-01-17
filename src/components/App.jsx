import { useState } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Footer from './ContactMe'
import projectData from '../../projects'
import ProjectDetails from './ProjectDetails'
import ProjectCover from './ProjectCover'
import '../style.css';


export default function App() {


const [projects, setProjects] = useState(projectData.data.projects)

function handleProjectMouse(id){
    setProjects(prevProjects=>{
      return prevProjects.map((project) =>{
        return project.id === id ? {...project, detailMode: !project.detailMode} : project
      })
    })
}

const allProjects = projects.map(singleProject=>{


  if(singleProject.detailMode){
    return(
        <ProjectDetails
            key={singleProject.id}
            id={singleProject.id}
            data={singleProject}
            handleMouse={handleProjectMouse}
            />
    )
  }
  else{
    return(
        <ProjectCover
          key={singleProject.id}
          id={singleProject.id}
          data={singleProject}
          handleMouse={handleProjectMouse}
          />

    )
  }
})


  return (
    <div className='content'>
      <NavBar />
      <Header/>
      <AboutMe />
      <div id='projects'>
        <h2 className='mt-5'>Selected Projects</h2>
        {allProjects}
      </div>
      <Experience />
      <Footer />
    </div>
  )
}

