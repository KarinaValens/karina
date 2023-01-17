import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext'


export default function Projects() {

const { projects }=useContext(AppContext)
const router = useRouter();
const {name} = router.query

  return (
    <section className='grid'>

      {projects.map((project)=>{
        return (
          <div key={project.id} className="center glass-effect" >
          {/* <h3>{project.name}</h3> */}
          <Image src={project.projectimg} alt={project.name} width="350" height="200"  sizes="(max-width: 700px) 100vw, 700px"/> 
          <button className='glass-effect button'>{project.name}</button>
          </div>
        )
      })}
</section>

)
}
