import {createContext, useEffect, useState} from 'react'

export const AppContext= createContext()


export default function AppContextProvider(props) {
/* navigation menu burguer menu open*/
const [show, setShow]= useState(false)

/* menu bar opening and close each menu */

/* const [menuOpen, setMenuOpen ]=useState(false) */

/* skills animations */
const skillsAnim ={
    hidden:{
        x: 0, 
        y: 0,
  },
    visible:{
        x: '80vw' , 
        y: ['0vh', '10vh', '0vh'],
        scale: [0, 1.5 ,  0],
           },
}


const value = {show, setShow, skillsAnim}

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)}

