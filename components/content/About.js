import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInRight = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

export default function About() {
  return (
    <motion.article
      id="about-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 className="sub-title" variants={fadeInRight}>
        About Me
      </motion.h2>
      <motion.div className="glass-effect picture-container karina-pic" variants={fadeInRight}>
        <Image src={"/media/images/about_me.jpg"} alt="Karina-Valens" width="200" height="200" sizes="(max-width: 700px) 100vw, 700px" />
      </motion.div>

      <motion.p id="presentation" variants={fadeInLeft}>
        I&apos;m a passionate frontend developer with hands-on backend experience, driven by building real products that solve everyday problems — the small, annoying things that take too much of our time. I have a background in UI/UX design, and I&apos;m constantly working to sharpen my eye for detail. I thrive on projects I believe in, and I&apos;m always looking to grow by taking on new challenges.
        <Link className="link" href="/media/docs/Karina-Valens_CV.pdf" download target="_blank">
          Download Karina_CV
        </Link>
      </motion.p>
    </motion.article>
  );
}
