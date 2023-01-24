import Image from "next/image";
import Link from "next/link";
import { projects } from "../../pages/api/projects";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Projects() {
  const [container, setContainer] = useState();

  useMemo(() => {
    const containerValue = {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 1,
          staggerChildren: 0.2,
        },
      },
    };
    return setContainer(containerValue);
  }, []);

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const projectArt = useRef(null);
  const projectIsInView = useInView(projectArt, { threshold: 1 });
  const projectAnim = useAnimation();

  useEffect(() => {
    console.log("element is", projectIsInView);
    if (projectIsInView) {
      projectAnim.start({ container });
    }
  }, [projectIsInView, projectAnim, container]);

  return (
    <>
      <motion.article className="projects" ref={projectArt}>
        <h2 className="sub-title ">Projects</h2>
        <motion.div className="grid" variants={projectAnim} initial="hidden" animate="visible">
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
