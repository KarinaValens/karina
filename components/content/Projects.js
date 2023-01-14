import Image from 'next/image'
import React, { useState } from 'react'


export default function Projects() {

  /* creating stage for the projects */
  const [projects, setProjects]=useState([])

  /* fetchin projects */
  async function  loadProjects() {
  const res = await fetch('/api/')
  const projectsData = await res.json()
  setProjects(projectsData)
  console.log(projectsData)
  }

  return (
    <section id="projects">

      <button onClick={loadProjects}>Projects</button>

      {projects.map((project)=>{
        return (
          <div key={project.id}>
          <h2>{project.name}</h2>
          <Image src={project.projectimg} alt={project.name} width={30} height={30}/>
          </div>
        )
      })}
</section>

)
}


{/* <h2>Recent Projects</h2>
<div id="projects-list"> */}
  {/*   <template id="single-template">
        <div class="projects-information">
            <img class="project-img" data-field="project-img" src="./images/SolomonSoundT.jpg"
                alt="Solomon-Sound-Therapy-Picture">
            <a href="./html/projects.html" data-field="project-name" class="clear-caption">Solomon</a>

        </div>
    </template> */}
   {/*  </div> */}