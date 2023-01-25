import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../components/context/AppContext";
import { motion, useAnimation, useInView } from "framer-motion";
import { projects } from "../api/projects";

export default function Projects() {
  const { show } = useContext(AppContext);
  const router = useRouter();
  const { name } = router.query;

  const project = projects.find((project) => project.name === name); //That's because find method stops searching when it finds the first element that satisfies the condition and returns it. So it only returns one project that matches the condition.

  /* -------------- // Annimations //------------------- */

  const projectDiv = useRef(null);
  const projectDivIsInView = useInView(projectDiv);
  const projectDivAnim = useAnimation();
  const projectDivAnim2 = useAnimation();
  const projectDivAnim3 = useAnimation();

  useEffect(() => {
    if (projectDivIsInView) {
      console.log("is in view?", projectDivIsInView);
      projectDivAnim.start({ x: ["-100vw", "0vw"], transition: { delay: 0.5, type: "spring", duration: 2, bounce: 0.3, stiffness: 100 } });
    }
    if (projectDivIsInView) {
      console.log("is in view?", projectDivIsInView);
      projectDivAnim2.start({ x: ["100vw", "0vw"], transition: { delay: 1.5, type: "spring", duration: 2, bounce: 0.3, stiffness: 100 } });
    }
    if (projectDivIsInView) {
      console.log("is in view?", projectDivIsInView);
      projectDivAnim3.start({ x: ["-100vw", "0vw"], transition: { delay: 3, type: "spring", duration: 2, bounce: 0.3, stiffness: 100 } });
    }
  }, [projectDiv, projectDivIsInView, projectDivAnim, projectDivAnim2, projectDivAnim3]);

  /* transition={{ delay: 3.5, duration: 5, type: "spring", stiffness: 100 } */

  return (
    <>
      {show ? (
        " "
      ) : (
        <div key={project.id} className="single-project-container">
          <h2 className="sub-title">{project.title}</h2>
          <div className="hero-project-single-page">
            <div className=" picture-container mockup">
              <Image
                src={project.mockup}
                alt={project.mockup}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <p>{project.description}</p>
          </div>
          <div className="center flex project-div" ref={projectDiv}>
            <motion.div className="flex project-div" animate={projectDivAnim}>
              <div className=" picture-container project-img-container">
                <Image src={project.image} alt={project.image} fill sizes="(max-width: 700px) 100vw, 700px" />
              </div>
              <p>{project.detail}</p>
            </motion.div>

            <motion.div className="flex project-div" animate={projectDivAnim2}>
              <div className=" picture-container project-img-container">
                <Image src={project.image2} alt={project.image2} fill sizes="(max-width: 700px) 100vw, 700px" />{" "}
              </div>
              <p>{project.detail2}</p>
            </motion.div>

            <motion.div className="flex project-div" animate={projectDivAnim3}>
              <div className=" picture-container project-img-container">
                <Image src={project.image3} alt={project.image3} fill sizes="(max-width: 700px) 100vw, 700px" />
              </div>
              <p>{project.detail3}</p>
            </motion.div>
          </div>
          <div className="link-site-container">
            <Link className="glass-effec link " href={project.url} target="-blank">
              Visit Site
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(contex) {
  return {
    //Passed to the page component as props
    props: { project: {} },
  };
}
