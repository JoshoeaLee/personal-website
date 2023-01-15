import React from 'react'
import '../style.css';
import {Stack} from 'react-bootstrap'


export default function Experience() {
    return (
        <section id='experience'>
            <Stack>
             <h1 className='ms-auto'>Experience</h1>
            </Stack>
            <Stack gap={3} className='work-experience ms-5'>
                <h3>Work Experience</h3>
                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
            </Stack>
            <Stack gap={3} className='technical-skills ms-5'>
                <h3>Technical Skills</h3>
                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
            </Stack>
        </section>
      )
}
