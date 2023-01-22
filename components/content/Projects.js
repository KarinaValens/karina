import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { projects } from "../../pages/api/projects";

export default function Projects() {
  return (
    <>
      <section className="projects">
        <h2 className="sub-title ">Projects</h2>
        <div className="grid">
          {projects.map((project) => {
            return (
              <div key={project.id} className="center flex glass-effect">
                <div className="picture-container">
                  <Image src={project.projectimg} alt={project.name} fill sizes="(max-width: 700px) 100vw, 700px" />
                </div>
                <Link className="glass-effect link" href={`projects/${project.name}`}>
                  {project.title}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
