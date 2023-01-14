import {createContext, useState} from 'react'

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


const value = {show, setShow, skillsAnim}

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)}

