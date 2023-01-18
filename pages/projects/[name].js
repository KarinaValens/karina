import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react';
import { AppContext } from '../../components/context/AppContext';


export default function Projects() {
  const { projects, show }=useContext(AppContext)
  const router = useRouter();
  const {name} = router.query
  const project = projects.find(project => project.name === name)//That's because find method stops searching when it finds the first element that satisfies the condition and returns it. So it only returns one project that matches the condition.
 
  return ( 
        <>   
        { show ? " ":
         <div key={project.id}>
          <h2>{project.name}</h2> 
          <di>
          <div className='glass-effect picture-container'><Image src={project.projectimg} alt={project.name} fill sizes="(max-width: 700px) 100vw, 700px"/></div> 
          <p>{project.description}</p>
          </di>
          <div>
          <div className='glass-effect picture-container'><Image src={project.mockup} alt={project.mockup} fill sizes="(max-width: 700px) 100vw, 700px"/> </div>
          <p>{project.detail}</p>
          </div>
          <div>
          <div className='glass-effect picture-container'><Image src={project.image} alt={project.image} fill sizes="(max-width: 700px) 100vw, 700px" /></div> 
          <p>{project.detail2}</p>
          </div>
          <div>
          <div className='glass-effect picture-container'><Image src={project.image2} alt={project.image2} fill sizes="(max-width: 700px) 100vw, 700px"/> </div>
          <p>{project.detail3}</p>
          </div>
          <div className='glass-effect picture-container'><Image src={project.image3} alt={project.image3} fill sizes="(max-width: 700px) 100vw, 700px"/> </div>
          <Link href={project.url} target="-blank">Visit Site</Link>       
         </div> }
    </>  
  )
}

