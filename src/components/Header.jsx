import down from '../assets/down.svg';
import {  Stack } from "react-bootstrap";


export default function Header(){
    return (
            <Stack id='header' >
                <h1 className='mb-5'>Joshua Lee</h1>
                <h4 className='mb-5'>Has a job rn lmao</h4>
                {/* <a href="#about">
                    <img className='position-absolute bottom-0 start-50' src={down} alt="About me" style={{ maxWidth: '5vw' }}/>
                </a> */}
            </Stack>  
    )
}