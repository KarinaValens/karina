import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Anchor from '../navigation/Anchor'


export default function Projects() {

const { projects }=useContext(AppContext)
const router = useRouter();
const {name} = router.query

  return (
    <section className='projects'>    
    <h2 className='sub-title '>Projects</h2>    
    <div className='grid'>
      {projects.map((project)=>{
        return (
          <div key={project.id} className="center glass-effect" >
          {/* <h3>{project.name}</h3> */}
          <Image src={project.projectimg} alt={project.name} width="250" height="150"  sizes="(max-width: 700px) 100vw, 700px"/> 
{/*           <button className='glass-effect button'>{project.name}</button>
 */}          <Link className="glass-effec link" href={`projects/${project.name}`}>{project.name}</Link>

          </div>
        )
      })}
    </div>
</section>
)
}
