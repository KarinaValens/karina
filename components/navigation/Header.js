import Nav from "./Nav";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/router";

export default function Header() {
  const { skillsAnim, show } = useContext(AppContext);

  const router = useRouter();
  /* I am using the useRoute and the router.pathname ==="/"  in order tho show the hero section
  on the index and hide it on the other pages
  the show ternary operator hide the content whent the nav is open */

  return (
    <header>
      <Nav />
      {show ? null : (
        <div>
          {router.pathname === "/" ? (
            <>
              <div id="karina-pitch" style={{ backgroundImage: "url(/media/images/KarinaValens.png)" }}>
                <motion.h2 className="skills" id="ux_ui" variants={skillsAnim} initial="hidden" animate="visible" transition={{ duration: 10, repeat: Infinity, repeatDelay: 4 }}>
                  UX/UI DESIGNER
                </motion.h2>

                <motion.h2 className="skills" id="front_end" variants={skillsAnim} initial="hidden" animate="visible" transition={{ delay: 5, duration: 10, repeat: Infinity, repeatDelay: 4 }}>
                  FRONTEND DEVELOPER
                </motion.h2>

                <motion.h2 className="skills" id="mult_designer" variants={skillsAnim} initial="hidden" animate="visible" transition={{ delay: 10, duration: 10, repeat: Infinity, repeatDelay: 4 }}>
                  MULTIMEDIA DESIGNER
                </motion.h2>

                <div id="karina-valens" className="glass-effect">
                  <h1>
                    <span id="name"> Karin </span>{" "}
                    <span id="last-name">
                      {" "}
                      V<span id="letter-a">a</span>lens{" "}
                    </span>
                  </h1>
                </div>
              </div>
            </>
          ) : null}
        </div>
      )}
    </header>
  );
}
