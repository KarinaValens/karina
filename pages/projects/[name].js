import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../components/context/AppContext";
import { motion } from "framer-motion";
import { projects } from "../api/projects";

const fadeInLeft = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const { show } = useContext(AppContext);
  const router = useRouter();
  const { name } = router.query;

  const project = projects.find((project) => project.name === name);

  return (
    <>
      {show ? (
        " "
      ) : (
        <div key={project.id} className="single-project-container">
          <h2 className="sub-title">{project.title}</h2>

          <motion.div
            className="hero-project-single-page"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="picture-container mockup" variants={fadeIn}>
              <Image
                src={project.mockup}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <motion.p variants={fadeIn}>{project.description}</motion.p>
          </motion.div>

          <motion.div
            className="project-div"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="picture-container project-img-container" variants={fadeInLeft}>
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 700px" />
            </motion.div>
            <motion.p variants={fadeInRight}>{project.detail}</motion.p>
          </motion.div>

          <motion.div
            className="project-div"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div className="picture-container project-img-container" variants={fadeInRight}>
              <Image src={project.image2} alt={project.title} fill sizes="(max-width: 700px) 100vw, 700px" />
            </motion.div>
            <motion.p variants={fadeInLeft}>{project.detail2}</motion.p>
          </motion.div>

          <motion.div
            className="project-div"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.p variants={fadeInLeft}>{project.detail3}</motion.p>
            <motion.div className="picture-container project-img-container" variants={fadeInRight}>
              <Image src={project.image3} alt={project.title} fill sizes="(max-width: 700px) 100vw, 700px" />
            </motion.div>
          </motion.div>

          {project.url && (
            <div className="link-site-container">
              <Link className="glass-effect link" href={project.url} target="_blank">
                Visit Site
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(contex) {
  return {
    props: { project: {} },
  };
}
