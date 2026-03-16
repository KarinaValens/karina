import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function About() {
  const aboutArt = useRef(null);
  const aboutIsInView = useInView(aboutArt);
  const aboutAnim = useAnimation();
  const aboutAnimText = useAnimation();

  useEffect(() => {
    if (aboutIsInView) {
      aboutAnim.start({ x: ["50vw", "0vw"], transition: { type: "spring", duration: 2, bounce: 0.3 } });
    }
    if (aboutIsInView) {
      aboutAnimText.start({ x: ["-50vw", "0vw"], transition: { type: "spring", duration: 2, bounce: 0.3 } });
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
        I&apos;m a passionate frontend developer with hands-on backend experience, driven by building real products that solve everyday problems — the small, annoying things that take too much of our time. I have a background in UI/UX design, and I&apos;m constantly working to sharpen my eye for detail. I thrive on projects I believe in, and I&apos;m always looking to grow by taking on new challenges.
        <Link className="link" href="/media/docs/Karina-Valens_CV.pdf" download target="_blank">
          Download Karina_CV
        </Link>
      </motion.p>
    </motion.article>
  );
}
