import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../../components/context/AppContext";
import { projects } from "../api/projects";

export default function ProjectList() {
  const { show } = useContext(AppContext);

  return (
    <>
      {show ? (
        " "
      ) : (
        <section className="projects">
          <h2 className="sub-title">Projects</h2>
          <div className="grid">
            {projects.map((project) => (
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
          </div>
        </section>
      )}
    </>
  );
}
