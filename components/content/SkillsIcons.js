import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiN8N,
  SiFlutter,
} from "react-icons/si";
import { DiIllustrator } from "react-icons/di";
import { TbApi, TbBrain, TbDeviceMobileCode, TbUxCircle, TbCloud, TbMovie } from "react-icons/tb";

const skills = [
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: TbDeviceMobileCode, label: "React Native" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss, label: "CSS3" },

  { icon: TbApi, label: "REST APIs" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiSupabase, label: "Supabase" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiN8N, label: "n8n" },

  { icon: SiFlutter, label: "FlutterFlow" },
  { icon: TbBrain, label: "AI Dev Tools" },
  { icon: TbCloud, label: "iPaaS" },
  { icon: SiFigma, label: "Figma" },
  { icon: TbUxCircle, label: "UI/UX Design" },
  { icon: DiIllustrator, label: "Illustrator" },
  { icon: TbMovie, label: "Premiere Pro" },
];

const rows = [skills.slice(0, 6), skills.slice(6, 12), skills.slice(12)];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export default function SkillsIcons() {
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % rows.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills-section">
      <h2 className="sub-title">Skills</h2>
      <div id="skills-list-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRow}
            id="skills-list"
            className="flex"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {rows[activeRow].map(({ icon: Icon, label }) => (
              <motion.div className="icon-container flex" key={label} variants={item}>
                <Icon size={40} className="skill-icon" title={label} />
                <span className="icon-label">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
