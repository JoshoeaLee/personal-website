import profile from '../assets/work-profile.jpg'


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
                    <p>Hi there! My name is Josh and I'm a software dev who used to be an interpreter/ translator.
                        I'm deeply experienced with having to take high-level human 
                        requirements from someone not familiar with my craft and creating solutions 
                        which are both practical and well suited for a target audience. 
                    </p>
                </div>
        </div>
    </section>
  )
}
