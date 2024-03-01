import { Stack } from "react-bootstrap"
import github from '../assets/github-mark.svg'
import linkedin from '../assets/iconmonstr-linkedin-3.svg'
import resume from '../assets/cvicon.svg'


export default function ContactMe(){
    return (
        <>            
            <Stack id='contact' gap={3} direction='horizontal' >
                    <a href="https://github.com/JoshoeaLee"><img src={github} alt="Github" style={{height: '50%'}} /></a>
                    <a href="https://linkedin.com/in/joshua-lee812"><img src={linkedin} alt="Linkedin" style={{height: '50%'}} /></a>
                    <a href=""><img src={resume} alt="My CV" style={{height: '50%'}} /></a>
            </Stack>
            <h6 className="muted">Email:me@joshualee.co.nz</h6> 

        </>
    )
}