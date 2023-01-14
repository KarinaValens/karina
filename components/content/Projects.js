import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'


export default function Projects() {

const { projects }=useContext(AppContext)
//loadProjects();

  return (
    <section>

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