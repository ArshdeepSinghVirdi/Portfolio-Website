import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import useScrollDirection from "./useScrollDirection";

const Skill = ({ name, x, y, controls, isMobile }) => {
  if (isMobile) {
    return (
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 shadow-dark cursor-pointer"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {name}
      </motion.div>
    );
  }
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={controls}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }}
    >
      {name}
    </motion.div>
  );
};

const skillsList = [
  { name: "Java", x: "-14vw", y: "2vw" },
  { name: "Javascript", x: "-12vw", y: "-10vw" },
  { name: "ReactJs", x: "20vw", y: "6vw" },
  { name: "NextJs", x: "0vw", y: "10vw" },
  { name: "NodeJs", x: "-23vw", y: "-15vw" },
  { name: "ExpressJs", x: "15vw", y: "-14vw" },
  { name: "MongoDB", x: "36vw", y: "-5vw" },
  { name: "Flutter", x: "0vw", y: "-20vw" },
  { name: "WordPress", x: "-7vw", y: "18vw" },
  { name: "Motion/GSap", x: "-40vw", y: "-5vw" },
  { name: "Tailwind CSS", x: "15vw", y: "18vw" },
  { name: "Git/Github", x: "20vw", y: "-5vw" },
  { name: "AI ML", x: "41vw", y: "5vw" },
  { name: "AutoCad", x: "-40vw", y: "8vw" },
  { name: "Java", x: "36vw", y: "15vw" },
  { name: "Python", x: "35vw", y: "-12vw" },
  { name: "C/C++", x: "-30vw", y: "16vw" },
  { name: "SQL", x: "-30vw", y: "2vw" },
];

const Skills = () => {
  const controls = useAnimation();
  const scrollDirection = useScrollDirection();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile && (scrollDirection === "down" || scrollDirection === "up")) {
      controls.start({ x: 0, y: 0 });
      controls.start({
        x: [0, 0],
        y: [0, 0],
        transition: { duration: 1.5 },
      });
    }
  }, [scrollDirection, controls, isMobile]);

  return (
    <>
      <h2 className="font-bold text-6xl md:text-8xl w-full text-center py-12 md:py-20 text-white">
        Skills
      </h2>
      {isMobile ? (
        <div className="w-full min-h-[60vh] flex flex-wrap gap-3 justify-center items-center px-2 pb-8">
          <motion.div
            className="w-full flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer">Web</span>
          </motion.div>
          {skillsList.map((skill, idx) => (
            <Skill key={idx} name={skill.name} isMobile={true} />
          ))}
        </div>
      ) : (
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            Web
          </motion.div>
          {skillsList.map((skill, idx) => (
            <Skill key={idx} name={skill.name} x={skill.x} y={skill.y} controls={controls} />
          ))}
        </div>
      )}
    </>
  );
};

export default Skills;
