import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';  //Bootstrap styling
import { ProjectProvider } from './contexts/ProjectContext';
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ProjectProvider>
        <App/>
    </ProjectProvider>
)
