import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../api/projects";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

export default function ProjectDetail() {
  const router = useRouter();
  const { name } = router.query;
  const [[activeSlide, direction], setActiveSlide] = useState([0, 0]);

  const project = projects.find((p) => p.name === name);
  if (!project) return null;

  const slides = [
    { image: project.mockup, text: null },
    ...project.sections,
  ];

  const paginate = (newDirection) => {
    setActiveSlide(([prev]) => {
      const next = (prev + newDirection + slides.length) % slides.length;
      return [next, newDirection];
    });
  };

  return (
    <>
        <article className="project-detail">
          <Link href="/projects" className="back-link">
            &larr; All Projects
          </Link>

          <div className="project-split">
            {/* Left: Carousel + meta underneath */}
            <div className="project-split-left">
              <div className="carousel-wrapper">
                <button
                  className="carousel-btn carousel-btn-left"
                  onClick={() => paginate(-1)}
                  aria-label="Previous slide"
                >
                  &#8249;
                </button>

                <div className="carousel-viewport">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={activeSlide}
                      className="carousel-slide"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <div className="carousel-image-container">
                        <Image
                          src={slides[activeSlide].image}
                          alt={`${project.title} — slide ${activeSlide + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          priority={activeSlide === 0}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button
                  className="carousel-btn carousel-btn-right"
                  onClick={() => paginate(1)}
                  aria-label="Next slide"
                >
                  &#8250;
                </button>
              </div>

              <div className="carousel-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${i === activeSlide ? "active" : ""}`}
                    onClick={() => setActiveSlide([i, i > activeSlide ? 1 : -1])}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* Right: Title + slide text that changes */}
            <div className="project-info-panel">
              <div className="project-info-top">
                <span className="project-category">{project.category}</span>
                <h1 className="project-title">{project.title}</h1>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeSlide}
                  className="project-slide-text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {slides[activeSlide].text || project.description}
                </motion.p>
              </AnimatePresence>

              <div className="project-links">
                {project.url && (
                  <Link
                    className="project-link glass-effect"
                    href={project.url}
                    target="_blank"
                  >
                    Visit Live Site &rarr;
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="project-bottom-bar">
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Year</span>
                <span className="meta-value">{project.year}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{project.role}</span>
              </div>
            </div>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </article>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
