import Image from "next/image";
import Link from "next/link";
import { projects } from "../../pages/api/projects";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects() {
  const projectArt = useRef(null);
  const projectIsInView = useInView(projectArt, { threshold: 4 });
  const projectAnim = useAnimation();
  const itemAnim = useAnimation();

  useEffect(() => {
    if (projectIsInView) {
      projectAnim.start({ opacity: [1, 1], scale: [0, 1], transition: { type: "spring", duration: 2, delayChildren: 0.6, staggerChildren: 0.5 } });
    }
    if (projectIsInView) {
      itemAnim.start({ opacity: [0, 1] });
    }
  }, [projectIsInView, projectAnim, itemAnim]);

  return (
    <>
      <motion.article className="projects" ref={projectArt}>
        <h2 className="sub-title ">Projects</h2>
        <motion.div className="grid" variants={projectAnim} initial="hidden" animate={projectAnim}>
          {projects.map((project) => {
            return (
              <motion.div key={project.id} className="center flex glass-effect" animate={itemAnim} transition={{ duration: 2 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
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
