import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState, useEffect, useCallback } from "react";
import { AppContext } from "../../components/context/AppContext";
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

export default function Projects() {
  const { show } = useContext(AppContext);
  const router = useRouter();
  const { name } = router.query;
  const [[activeSlide, direction], setActiveSlide] = useState([0, 0]);

  const project = projects.find((project) => project.name === name);

  const slides = [
    { image: project.mockup, text: null },
    { image: project.image, text: project.detail },
    { image: project.image2, text: project.detail2 },
    { image: project.image3, text: project.detail3 },
  ];

  const paginate = useCallback((newDirection) => {
    setActiveSlide(([prev]) => {
      const next = prev + newDirection;
      if (next >= 0 && next < slides.length) {
        return [next, newDirection];
      }
      if (next >= slides.length) {
        return [0, 1];
      }
      return [prev, 0];
    });
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <>
      {show ? (
        " "
      ) : (
        <div key={project.id} className="single-project-container">
          <h2 className="sub-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>

          <div className="carousel-wrapper">
            <button
              className="carousel-btn carousel-btn-left"
              onClick={() => paginate(-1)}
              disabled={activeSlide === 0}
              aria-label="Previous slide"
            >
              &#8249;
            </button>

            <div className="carousel-viewport">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeSlide}
                  className={`carousel-slide ${slides[activeSlide].text ? "has-text" : ""}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <div className="carousel-image-container">
                    <Image
                      src={slides[activeSlide].image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                    />
                  </div>
                  {slides[activeSlide].text && (
                    <p className="carousel-text">{slides[activeSlide].text}</p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="carousel-btn carousel-btn-right"
              onClick={() => paginate(1)}
              disabled={activeSlide === slides.length - 1}
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
