import { Stack } from "react-bootstrap"
import github from '../assets/github-mark.svg'
import linkedin from '../assets/iconmonstr-linkedin-3.svg'


export default function ContactMe(){
    return (
            <Stack id='contact' gap={5} direction='horizontal' >
                    <img src={github} alt="Github" style={{height: '50%'}} />
                    <img src={linkedin} alt="Linkedin" style={{height: '50%'}}  />
                    <h6 className="muted">Email: me@joshualee.co.nz</h6>
               
            </Stack>
    )
}