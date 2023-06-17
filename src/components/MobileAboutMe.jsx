import profile from '../assets/work-profile.jpg'

export default function MobileAboutMe() {
    return (
      <section id='about' style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems: 'center'}}>
          <h4>About Me</h4>
                <div className='image-holder'>
                    <img className='profile-pic'src={profile} alt='Joshua Lee' style={{ borderRadius: '60%' }} />
                </div>
                  <div className='about-text-mobile'>
                      <h6>Translating my Skillset</h6>
                      <p>Hi there! My name is Josh and I'm a software dev who used to be an interpreter/ translator.
                        I'm deeply experienced with having to take high-level human 
                        requirements from someone not familiar with my craft and creating solutions 
                        which are both practical and well suited for a target audience. 
                    </p>
                  </div>
          
      </section>
    )
  }