import { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Footer from './ContactMe'
import ProjectDetails from './ProjectDetails'
import ProjectCover from './ProjectCover'
import MobileProject from './MobileProject'
import MobileAboutMe from './MobileAboutMe'
import MobileHeader from './MobileHeader'
import MobileExperience from './MovileExperience'
//import { useProjects } from '../contexts/ProjectContext'  //USED FOR CLOUD VERSION
import offlineData from '../assets/offline-project-data.json'


export default function App() {


const [projects, setProjects] = useState([])
const [windowWidth, setWindowWidth] = useState(window.innerWidth)

useEffect(()=>{
  window.addEventListener('resize', function(){
    setWindowWidth(window.innerWidth)
  })
}, [])

//USED FOR CLOUD VERSION
//-----------------------------------------------
//const {getProjects} = useProjects()

// async function getProjectData(){
//   const myProjectData = await getProjects()
//   setProjects(myProjectData)
// }
//-------------------------------------------------

async function getProjectDataOffline(){
    const myProjectData = offlineData;
    setProjects(myProjectData);
}


useEffect(()=>{
 // getProjectData()  CLOUD VERSION CODE
   getProjectDataOffline();
}, [])

function handleProjectMouseOn(id){
    setProjects(prevProjects=>{
      return prevProjects.map((project) =>{
        return project.id === id ? {...project, detailMode: "true"} : project
      })
    })
}

function handleProjectMouseOff(id){
  setProjects(prevProjects=>{
    return prevProjects.map((project) =>{
      return project.id === id ? {...project, detailMode: "false"} : project
    })
  })
}

const allProjects = projects.map(singleProject=>{

  if(windowWidth>700){
    if(singleProject.detailMode=='false'){
      return(
        <ProjectCover
            key={singleProject.id}
            id={singleProject.id}
            data={singleProject}
            handleMouse={handleProjectMouseOn}
        />
          
      )
    }
    else{
      return(
        <ProjectDetails
              key={singleProject.id}
              id={singleProject.id}
              data={singleProject}
              handleMouse={handleProjectMouseOff}
        />
         
      )
    }
    

  }
  else{
    return(
      <MobileProject
          key={singleProject.id}
          id={singleProject.id}
          data={singleProject}
      />
      )

  
}})


  return (
    <div className='content'>
      <NavBar />
      
      {windowWidth>750? <Header/>: <MobileHeader />}
      {/* {windowWidth>700? <AboutMe />: <MobileAboutMe/>}

      <div id='projects'>
        {windowWidth>700? <h2 className='mt-5'>Selected Projects</h2> : <h4 className='mt-5'>Selected Projects</h4>}
        {allProjects}
      </div>

      {windowWidth>700? <Experience />: <MobileExperience/>}

      <Footer /> */}
    </div>
  )
}

