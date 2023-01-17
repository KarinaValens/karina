import Image from 'next/image'
import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext'


export default function ProjectList() {

const { projects }=useContext(AppContext)


  return (
    <section>

      {projects.map((project)=>{
        return (
          <div key={project.id}>
          <h2>{project.name}</h2>
          <Image src={project.projectimg} alt={project.name} width={30} height={30}/> 
          <p>{project.description}</p>
          <button>Read more</button>
          </div>
        )
      })}
</section>

)
}
