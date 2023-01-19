import Image from 'next/image'
import Link from 'next/link';
import React, { useContext} from 'react'
import { AppContext } from '../../components/context/AppContext';


export default function ProjectList() {

const { projects, show }=useContext(AppContext)


  return (
    <>
    { show ? " " :
    <section className='projects'>    
    <h2 className='sub-title'>Projects</h2>    
    <div className='grid'>      
    {projects.map((project)=>{
        return (
          <div key={project.id} className="center flex glass-effect" >
          <Image src={project.projectimg} alt={project.name} width="250" height="150"   sizes="(max-width: 700px) 100vw, 700px"/> 
          <Link className="glass-effec link" href={`projects/${project.name}`}>{project.name}</Link>
          </div>
        )
      })}
    </div>
  </section>}
  </>
)
}
