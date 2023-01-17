import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext} from 'react'
import { AppContext } from '../../components/context/AppContext'


export default function Projects() {
  const { projects }=useContext(AppContext)
  const router = useRouter();
  const {project} = router.query.project

  return (
    <section>

      {projects.map((project)=>{
        return (
          <div key={project.id}>
          <h2>{project.name}</h2>
          <Image src={project.projectimg} alt={project.name} width={60} height={60}/> 
          <p>{project.description}</p>
          <Image src={project.mockup} alt={project.mockup} width={30} height={30}/> 
          <p>{project.detail}</p>
          <Image src={project.image} alt={project.image} width={30} height={30}/> 
          <p>{project.detail2}</p>
          <Image src={project.image2} alt={project.mockup} width={30} height={30}/> 
          <p>{project.detail3}</p>
          <Image src={project.image3} alt={project.mockup} width={30} height={30}/> 
          <Link href={project.url} target="-blank">Visit Site</Link>         
          </div>
        )
      })}
</section>

)
}
