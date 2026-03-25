import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../api/projects";

const PROJECTS_PER_PAGE = 6;

export default function ProjectList() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const start = page * PROJECTS_PER_PAGE;
  const visible = projects.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <section className="projects">
      <h2 className="sub-title">Projects</h2>

      <div className="projects-carousel">
        <button
          className="projects-nav-btn"
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 0}
          aria-label="Previous page"
        >
          &#8249;
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.3 }}
          >
            {visible.map((project) => (
              <Link
                key={project.id}
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
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          className="projects-nav-btn"
          onClick={() => setPage((p) => p + 1)}
          disabled={page === totalPages - 1}
          aria-label="Next page"
        >
          &#8250;
        </button>
      </div>

      <div className="projects-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`projects-dot ${i === page ? "active" : ""}`}
            onClick={() => setPage(i)}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
