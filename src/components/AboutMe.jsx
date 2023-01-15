import React from 'react'
import profile from '../assets/work-profile.jpg'
import '../style.css';


export default function AboutMe() {
  return (
    <section id='about'>
        <h1>About Me</h1>
        <div className='about-card'>
                <div className='image-holder'>
                    <img className='profile-pic'src={profile} alt='Joshua Lee' style={{height: "70%", borderRadius: '60%' }} />
                </div>
                <div className='about-text'>
                    <h4>Translating my Skillset</h4>
                    <p>Hi there! My name is Josh and I'm an ex-translator/interpreter aiming to be a
                        software developer. I'm deeply experienced with having to take high-level human 
                        requirements from someone not familiar with my craft and creating solutions 
                        which are both practical and well suited for a target audience. 
                    </p>
                    <p>
                        Abstract syntax is 
                        pretty easy for me to pick up and as someone who's worked for legal, medical and 
                        literary based clients without having any background in any of these areas, I'm confident
                        in my research skills and my ability to seek help when necessary!
                    </p>
                </div>
        </div>
    </section>
  )
}
