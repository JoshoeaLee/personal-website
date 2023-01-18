import down from '../assets/down.svg';
import {  Stack } from "react-bootstrap";


export default function MobileHeader(){
    return (
            <Stack id='header' >
                <h3 className='mb-5'>Joshua Lee</h3>
                <h6 className='mb-5'>Translating ideas, coding them into reality</h6>
                <h6 className='mb-5'>Japanese - English translator gone software dev</h6>
                <a href="#about">
                    <img className='position-absolute bottom-0 start-50' src={down} alt="About me" style={{ maxWidth: '5vw' }}/>
                </a>
            </Stack>  
    )
}