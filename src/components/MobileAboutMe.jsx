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
          
      </section>
    )
  }