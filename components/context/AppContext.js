import {createContext, useEffect, useState} from 'react'

export const AppContext= createContext()


export default function AppContextProvider(props) {
/* navigation menu */
const [show, setShow]= useState(false)
/* skills animations */
const skillsAnim ={
    hidden:{
        x: 0, 
        y: 0,
        opacity: 0
    },
    visible:{
        x: '80vw' , 
        y: ['0vh', '10vh', '0vh'],
        opacity: [0, .5,0.8, 1 , 1, 1,0.8, .5 , 0] ,
          },
}
  /* creating stage for the projects */
  const [projects, setProjects]=useState([])

  /* fetchin projects */
    useEffect(()=>{
    async function  loadProjects() {
        const res = await fetch('/api/');
        const projectsData = await res.json();
        setProjects(projectsData);}
        loadProjects();//calling the loadProjects function
  },[])

const value = {show, setShow, skillsAnim, projects}

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)}

