import Image from 'next/image'

export default function About() {
  return (
          <article id="about-container">             
                  <h2 className='sub-title'>About Me</h2>
                  <div className='glass-effect picture-container karina-pic' /* class="projects-information" */>
                  <Image  src={'/media/images/about_me.jpg'} alt="Karina-Valens" width="200" height="200"  sizes="(max-width: 700px) 100vw, 700px"/>
                  </div>
                  
                  <p id="presentation">Hi!! I am Karina. I love coding, knitting, making handmade soap and I love coffee! 
                     I really like to learn a lot of new things. 
                     Back in my country, Ecuador, I studied science in the high school Chemistry, Biology, Anatomy, Physics, well I wasn´t really good at the last one. 
                     I was also into sports (now I really have to push myself to go to the gym := ).
                     I tried to learn to play guitar and piano, that didn’t go so well, but I know how to sing, … kind of. 
                     In College, I studied Business, and I worked in that field for some years.  
                     When I moved to Denmark, I started learning a lot of cool stuff among them, coding!!! And there is where this amazing journey starts. 
                     Welcome to my portfolio !
                  <a /* class="cta-btn" */ href="./docs/Karina_Valens_CV.pdf" download target="_blank">More...</a>
                  </p>
              
          </article>
  )
}

