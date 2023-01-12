import { useState } from 'react'
import Hero from './Hero'
import Footer from './Footer'
import projectData from '../../projects'
import ProjectDetails from './ProjectDetails'
import ProjectCover from './ProjectCover'

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
      <Hero/>
      <h3>Projects</h3>
      {allProjects}
      <Footer />
    </div>
  )
}
