import React, {useContext} from 'react'
import offlineJson from '../assets/offline-project-data.json'

const ProjectContext = React.createContext()

export function useProjects(){
    return useContext(ProjectContext)
}

//Pretending that I'd actually use functions other than GET so making a context makes sense

export const ProjectProvider = ({children})=>{

    async function getProjects(){

        const response = await fetch('https://portfolioprojectsapi.azurewebsites.net/Projects')
        const json = await response.json()
        return json        
    }

    return (
        <ProjectContext.Provider value ={{  
            getProjects,
        }}>
            {children}
        </ProjectContext.Provider>
    )
}