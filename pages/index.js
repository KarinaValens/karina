import Head from "next/head";
import { useContext } from "react";
import SkillsIcons from "../components/content/SkillsIcons";
import { AppContext } from "../components/context/AppContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { show } = useContext(AppContext);
  return (
    <>
      <Head>
        <title>Portfolio Karina Valens</title>
        <meta name="description" content="Karina Valens Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="portfolio frontend developer design" />
      </Head>
      {show ? (
        " "
      ) : (
        <main className="home-main">
          <div className="home-sidebar">
            <div className="sidebar-logo">
              <Image src="/media/images/logo.png" width={40} height={40} alt="logo" />
            </div>
            <div className="sidebar-links">
              <Link href="/about" className="sidebar-link">
                About Me
              </Link>
              <Link href="/projects" className="sidebar-link">
                Projects
              </Link>
            </div>
            <div className="sidebar-social">
              <a href="https://github.com/KarinaValens" target="_blank" rel="noreferrer">
                <Image width={24} height={24} src="/media/icons/github.png" alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/karinavalenswebdeveloper/" target="_blank" rel="noreferrer">
                <Image width={24} height={24} src="/media/icons/linkedin.png" alt="linkedin" />
              </a>
            </div>
          </div>

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
      )}
    </>
  );
}
