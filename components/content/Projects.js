import Image from "next/image";
import Link from "next/link";
import { projects } from "../../pages/api/projects";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects() {
  /*  const projectArt = useRef(null);
  const projectIsInView = useInView(projectArt, { threshold: 0.5 });
  const projectAnim = useAnimation();
  const itemAnim = useAnimation();

  useEffect(() => {
    if (projectIsInView) {
      projectAnim.start({ opacity: [1, 1], scale: [0, 1], transition: { delayChildren: 0.9 }, staggerChildren: 0.6 });
      itemAnim.start({ opacity: [0, 1], y: [5, 0], transition: { duration: 2 } });
    }
  }, [projectIsInView, projectAnim, itemAnim]); */

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.article className="projects" initial={"hidden"} whileInView={"visible"} viewport={{ once: false }} transition={{ stagerChildren: 0.5 }} /* ref={projectArt} */>
        <h2 className="sub-title ">Projects</h2>
        <motion.div className="grid" variants={container}>
          {projects.map((project) => {
            return (
              <motion.div key={project.id} className="center flex glass-effect" variants={item}>
                <div className="picture-container">
                  <Image src={project.projectimg} alt={project.name} fill sizes="(max-width: 700px) 100vw, 700px" />
                </div>
                <Link className="glass-effect link" href={`projects/${project.name}`}>
                  {project.title}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.article>
    </>
  );
}
