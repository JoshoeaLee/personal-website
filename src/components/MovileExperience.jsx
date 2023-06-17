import React from 'react'
import {Stack} from 'react-bootstrap'


export default function MobileExperience() {
    return (
        <section id='experience' style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
            <Stack gap={3} className='work-experience mt-3 ms-3'>
                <h3>Work Experience</h3>
                <h5>Intern Analyst Developer - FNZ</h5>
                <p><i>C#, .NET, VB, Selenium, TeamCity, Jira, AzureDevOps, SQL, Burp</i></p>
                <p>Worked in a team to automate suites of manual tests for a variety of financial platforms. Took ownership of parts of the suite and then worked on maintaining and optimising said tests. Became part of maintaining the CI/CD process at FNZ for clients. </p>
                <h5>Japanese to English Translator - Genius Inc</h5>
                <p>Translated and localised documents and video games from Japanese to English while regularly keeping in contact with an end client to make sure all requirements are met and to adapt to any sudden changes.  This was all performed in a heavily time-restricted and high pressure environment.</p>
                <h5>English Language Tutor - Kanda University of Language Studies</h5>
                <p>Communicated with other staff to coordinate instruction to suit students’ individual requirements. Worked interpersonally in a positive manner with a variety of students with differing temperaments and needs.</p>
                <h5>Teaching Assistant - Hitotsubashi University</h5>
                <p>Developed my own organisational and time-management skills as I managed students and acted as a leader in having them set up local sports festivals to stimulate community growth. Required speaking in Japanese, Korean and English.</p>
            </Stack>
            <Stack gap={3} className='technical-skills ms-3 mt-3'>
                <h3>Technical Skills</h3>
                <h5>Programming Languages</h5>
                <p>JavaScript, Java, Python, C#, PHP, VB, Swift</p>
                <h5>Frameworks, Libraries and Node.js</h5>
                <p>ASP.NET Core, React.js, Express.js, Bootstrap, Node.js, Selenium</p>
                <h5>Tools</h5>
                <p>Azure Cloud Services, AWS, Android Studio, Figma, GitHub, 3rd Party APIs, Jira, Kanban, Burp, TeamCity</p>
                <h5>Data and Other</h5>
                <p>SQL, MongoDB, HTML, CSS</p>
                <h5>Certifications</h5>
                <p>AWS CLoud Practitioner</p>
                <h5>Spoken Languages</h5>
                <p>English, Japanese, Korean</p>

            </Stack>
        </section>
      )
}
