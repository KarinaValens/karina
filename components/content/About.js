import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <article className="about-page">
      <div className="about-split">
        <motion.div
          className="about-photo-side"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-photo-wrapper glass-effect">
            <div className="about-photo-inner">
              <Image
                src="/media/images/about_me.jpg"
                alt="Karina Valens"
                fill
                sizes="400px"
                style={{ objectFit: "cover", objectPosition: "center top", borderRadius: "10px" }}
              />
            </div>
          </div>
        </motion.div>

        <div className="about-info-side">
          <motion.span className="about-label" custom={0} initial="hidden" animate="visible" variants={fadeIn}>
            Frontend Developer & Designer
          </motion.span>

          <motion.h1 className="about-name" custom={1} initial="hidden" animate="visible" variants={fadeIn}>
            Karina Valens
          </motion.h1>

          <motion.p className="about-intro" custom={2} initial="hidden" animate="visible" variants={fadeIn}>
            I build real products that solve everyday problems — the small, annoying things that take too much of our time. With a background in UI/UX design and hands-on full-stack experience, I focus on shipping things that people actually want to use.
          </motion.p>

          <motion.div className="about-details" custom={3} initial="hidden" animate="visible" variants={fadeIn}>
            <div className="about-detail">
              <span className="about-detail-label">Based in</span>
              <span className="about-detail-value">Copenhagen, Denmark</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Experience</span>
              <span className="about-detail-value">3+ years building for the web & mobile</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Focus</span>
              <span className="about-detail-value">React, Next.js, React Native, Supabase</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Education</span>
              <span className="about-detail-value">KEA — Multimedia Design & Frontend Development (2021–2023)</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Background</span>
              <span className="about-detail-value">Bachelor in Accounting & Auditing — Universidad Politécnica Salesiana, Ecuador (2012–2017)</span>
            </div>
          </motion.div>

          <motion.div className="about-actions" custom={4} initial="hidden" animate="visible" variants={fadeIn}>
            <Link className="about-btn" href="/media/docs/Karina-Valens_CV.pdf" download target="_blank">
              Download CV
            </Link>
            <Link className="about-btn about-btn-outline" href="/projects">
              See My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
