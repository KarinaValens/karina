import Nav from "./Nav"
import { motion } from "framer-motion"
import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

export default function Header() {
  const { skillsAnim, show } = useContext(AppContext);

  return (
    <header>
    
      {show ? " " : <div id="karina-pitch" style={{backgroundImage: 'url(/media/images/KarinaValens.png)'}}>
        <motion.h2
          className="skills"
          id="ux_ui"
          variants={skillsAnim}
          initial="hidden"
          animate="visible" 
          transition={{duration: 10,  repeat: Infinity, repeatDelay: 5}}
         >UX/UI DESIGNER
        </motion.h2>

        <motion.h2
          className="skills"
          id="front_end"
          variants={skillsAnim}
          initial="hidden"
          animate="visible" 
          transition={{duration: 10,  repeat: Infinity, repeatDelay: 10}}
        >FRONTEND DEVELOPER
        </motion.h2>
        
        <motion.h2
          className="skills"
          id="mult_designer"
          variants={skillsAnim}
          initial="hidden"
          animate="visible"
          transition={{duration: 10,  repeat: Infinity, repeatDelay: 15}}
         >MULTIMEDIA DESIGNER
        </motion.h2>

      <div id="karina-valens" className="glass-effect">
        <h1 >
          <span id="name"> Karin </span>{" "}
          <span id="last-name"> V<span id="letter-a">a</span>lens </span>
        </h1>
      </div>
        </div>}

        
      </header>
  );
}
