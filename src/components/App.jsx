import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Footer from './ContactMe'
import projectData from '../../projects'
import ProjectDetails from './ProjectDetails'
import ProjectCover from './ProjectCover'
import MobileProject from './MobileProject'
import '../style.css';
import MobileAboutMe from './MobileAboutMe'
import MobileHeader from './MobileHeader'
import MobileExperience from './MovileExperience'


export default function App() {


const [projects, setProjects] = useState(projectData.data.projects)
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

useEffect(()=>{
  window.addEventListener('resize', function(){
    setWindowWidth(window.innerWidth)
  })
}, [])

function handleProjectMouse(id){
    setProjects(prevProjects=>{
      return prevProjects.map((project) =>{
        return project.id === id ? {...project, detailMode: !project.detailMode} : project
      })
    })
}

const allProjects = projects.map(singleProject=>{

  if(windowWidth<=700){
    return(
    <MobileProject
        key={singleProject.id}
        id={singleProject.id}
        data={singleProject}
    />
    )

  }
  else{

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
}})


  return (
    <div className='content'>
      <NavBar />
      
      {windowWidth>700? <Header/>: <MobileHeader />}
      {windowWidth>700? <AboutMe />: <MobileAboutMe/>}

      <div id='projects'>
        {windowWidth>700? <h2 className='mt-5'>Selected Projects</h2> : <h4 className='mt-5'>Selected Projects</h4>}
        {allProjects}
      </div>

      {windowWidth>700? <Experience />: <MobileExperience/>}

      <Footer />
    </div>
  )
}

