import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react';
import { AppContext } from '../../components/context/AppContext';
import {motion} from "framer-motion"
import { projects } from '../api/projects'


export default function Projects() {
  
  
 const {show }=useContext(AppContext)
 const router = useRouter();
 const {name} = router.query;  

  const project = projects.find(project => project.name === name)//That's because find method stops searching when it finds the first element that satisfies the condition and returns it. So it only returns one project that matches the condition.
 
  console.log(name)

  return ( 
        <>   
        { show ? " ":
         <div key={project.id} className="single-project-container">
          <h2 className='sub-title'>{project.name}</h2> 
          <div className=' picture-container mockup'>
            <Image src={project.mockup} alt={project.mockup} fill sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"/> </div>
          <p>{project.description}</p>
          
          
          <div className='center flex'>
       
          <motion.div className='flex' 
          initial={{x:'-100vw'}} 
          animate={{x:0}}>
          <div className=' picture-container'>
            <Image src={project.image}  alt={project.image} fill sizes="(max-width: 700px) 100vw, 700px" /></div> 
          <p>{project.detail}</p>
          </motion.div>

          <motion.div className='flex'
          initial={{x:'500vw'}}
          animate={{x:0}}>
          <div className=' picture-container'><Image src={project.image2} alt={project.image2} fill sizes="(max-width: 700px) 100vw, 700px"/> </div>
          <p>{project.detail2}</p>
          </motion.div> 


          <motion.div className='flex'
          initial={{x:'-100vw'}}
          animate={{x:0}}>
          <div className=' picture-container'><Image src={project.image3} alt={project.image3} fill sizes="(max-width: 700px) 100vw, 700px"/> </div>
          <p>{project.detail3}</p>
          </motion.div>

          </div>

          <Link className='glass-effec link link-site' href={project.url} target="-blank">Visit Site</Link>       
         </div> }
    </>  
  )
}

// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths:   [{ params: { name: 'Colors-&-Animations' } }, { params: { name: 'Sleepy-Baby' }}  , { params: { name: 'Solomon-Sound-Therapy' } } , { params: { name: 'Hack-Hogwarts-Student-List' } }]/* {params: {name: 'Colors-&-Animations'}} */,
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { project: {} },
  }
}