import Image from "next/image";
import Link from "next/link";
import { projects } from "../../pages/api/projects";
import { motion } from "framer-motion";

export default function Projects() {
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
      <motion.article
        className="projects"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.5 }}
      >
        <h2 className="sub-title">Projects</h2>
        <motion.div className="grid" variants={container}>
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link
                href={`projects/${project.name}`}
                className="project-card glass-effect"
              >
                <div className="project-card-image">
                  <Image
                    src={project.projectimg}
                    alt={project.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 350px"
                  />
                </div>
                <div className="project-card-info">
                  <span className="project-card-category">{project.category}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                  <div className="project-card-tech">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="tech-tag-sm">{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag-sm">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.article>
    </>
  );
}
