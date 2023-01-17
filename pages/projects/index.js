import Image from 'next/image'
import React, { useContext} from 'react'
import { AppContext } from '../../components/context/AppContext';


export default function ProjectList() {

const { projects }=useContext(AppContext)


  return (
    <section className='projects'>    
    <h2 className='sub-title'>Projects</h2>    
    <div className='grid'>      
    {projects.map((project)=>{
        return (
          <div key={project.id} className="center glass-effect" >
          <h2>{project.name}</h2>
          <Image src={project.projectimg} alt={project.name} width="250" height="150"   sizes="(max-width: 700px) 100vw, 700px"/> 
          <button className='glass-effect button'>Read more</button>
          </div>
        )
      })}
    </div>
  </section>
)
}
