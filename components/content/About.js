import Image from 'next/image'

function About() {
  return (
    <div id="about-section">
          
          <article id="about-me-article">
              <div id="about-me-text">
                  <h2>About Me</h2>
                  <p>My name is Karina Valens, I have been a Frontend Developer and Multimedia Design student at KEA
                      in the last year and a
                      half.
                      Where my passion for; web development, animations and UI/UX design; has increased.
                      Previously, I learned basic programing on my own and I fall in love with the subject, for that
                      reason I decided to start with a formal education at KEA, changing in that way my career path.
                      I am really looking forward to expanding my abilities in these subjects and apply that
                      knowledge.
                  </p>
                  <a /* class="cta-btn" */ href="./docs/Karina_Valens_CV.pdf" download target="_blank">More...</a>
              </div>
              <div id="about-me-fig" /* class="projects-information" */>
                  <Image /* class="project-img"  */ src={'/media/images/about_me.jpg'} alt="Karina-Valens" width="100" height="100"  sizes="(max-width: 700px) 100vw, 700px"/>
              </div>
          </article>
      </div>
  )
}

export default About