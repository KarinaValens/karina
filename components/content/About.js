import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const aboutArt = useRef(null);
  const aboutIsInView = useInView(aboutArt);
  const aboutAnim = useAnimation();
  const aboutAnimText = useAnimation();

  useEffect(() => {
    if (aboutIsInView) {
      aboutAnim.start({ x: ["50vw", "0vw"], transition: { type: "spring", duration: 1.5, bounce: 0.3 } });
    }
    if (aboutIsInView) {
      aboutAnimText.start({ x: ["-50vw", "0vw"] });
    }
  }, [aboutAnim, aboutAnimText, aboutIsInView]);

  return (
    <motion.article id="about-container" ref={aboutArt}>
      <motion.h2 className="sub-title" animate={aboutAnim}>
        About Me
      </motion.h2>
      <motion.div className="glass-effect picture-container karina-pic" animate={aboutAnim}>
        <Image src={"/media/images/about_me.jpg"} alt="Karina-Valens" width="200" height="200" sizes="(max-width: 700px) 100vw, 700px" />
      </motion.div>

      <motion.p id="presentation" animate={aboutAnimText}>
        Hi!! I am Karina. I love coding, knitting, making handmade soap and I love coffee! I really like to learn a lot of new things. Back in my country, Ecuador, I studied science in the high school Chemistry, Biology, Anatomy, Physics, well I
        wasn`t really good at the last one. I was also into sports (now I really have to push myself to go to the gym := ). I tried to learn to play guitar and piano, that didn’t go so well, but I know how to sing, … kind of. In College, I studied
        Business, and I worked in that field for some years. When I moved to Denmark, I started learning a lot of cool stuff among them, coding!!! And there is where this amazing journey starts. Welcome to my portfolio !
        <a href="./docs/Karina_Valens_CV.pdf" download target="_blank">
          More...
        </a>
      </motion.p>
    </motion.article>
  );
}
