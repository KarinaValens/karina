import Head from "next/head";
import SkillsIcons from "../components/content/SkillsIcons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Karina Valens</title>
        <meta name="description" content="Karina Valens Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="portfolio frontend developer design" />
      </Head>
      <main className="home-main">
        <div className="home-content" style={{ backgroundImage: "url(/media/images/KarinaValens.png)" }}>
          <motion.h2 className="flying-skill" id="ux_ui"
            animate={{ x: ["-10vw", "50vw", "110vw"], y: ["0vh", "35vh", "0vh"], opacity: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatDelay: 16, times: [0, 0.5, 1] }}
          >
            UX/UI DESIGNER
          </motion.h2>
          <motion.h2 className="flying-skill" id="front_end"
            animate={{ x: ["-10vw", "50vw", "110vw"], y: ["0vh", "35vh", "0vh"], opacity: [0, 1, 0] }}
            transition={{ delay: 8, duration: 8, repeat: Infinity, repeatDelay: 16, times: [0, 0.5, 1] }}
          >
            FRONTEND DEVELOPER
          </motion.h2>
          <motion.h2 className="flying-skill" id="mult_designer"
            animate={{ x: ["-10vw", "50vw", "110vw"], y: ["0vh", "35vh", "0vh"], opacity: [0, 1, 0] }}
            transition={{ delay: 16, duration: 8, repeat: Infinity, repeatDelay: 16, times: [0, 0.5, 1] }}
          >
            MULTIMEDIA DESIGNER
          </motion.h2>
          <div className="home-overlay">
            <div id="karina-valens" className="glass-effect">
              <h1>
                <span id="name"> Karin </span>{" "}
                <span id="last-name">
                  {" "}
                  V<span id="letter-a">a</span>lens{" "}
                </span>
              </h1>
            </div>
            <SkillsIcons />
          </div>
        </div>
      </main>
    </>
  );
}
