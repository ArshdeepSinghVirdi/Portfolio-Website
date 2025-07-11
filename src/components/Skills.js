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
  { name: "WordPress", x: "-7vw", y: "18vw" },
  { name: "Motion/GSap", x: "-40vw", y: "-5vw" },
  { name: "Flutter", x: "15vw", y: "18vw" },
  { name: "Git/Github", x: "20vw", y: "-5vw" },
  { name: "Scikit-Learn", x: "41vw", y: "5vw" },
  { name: "Typescript", x: "-40vw", y: "8vw" },
  { name: "Java", x: "36vw", y: "15vw" },
  { name: "Python", x: "35vw", y: "-12vw" },
  { name: "Docker", x: "-30vw", y: "16vw" },
  { name: "SQL", x: "-30vw", y: "2vw" },
  { name: "EDA", x: "-30vw", y: "2vw" },
  { name: "Data Visualization", x: "0vw", y: "-20vw" },
  
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
        <div className="w-full min-h-[60vh] flex flex-col items-center px-2 pb-8">
          <motion.div
            className="w-full flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer animate-blink text-2xl mb-2" style={{ letterSpacing: '2px', minWidth: 90, minHeight: 60 }}>
              Web
            </span>
          </motion.div>
          <div className="w-full grid grid-cols-3 gap-3">
            {skillsList.filter(skill => skill.name !== 'Data Visualization').map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-center w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                viewport={{ once: true }}
              >
                <span
                  className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 shadow-dark cursor-pointer animate-rotate-once text-base sm:text-lg"
                  style={{ letterSpacing: '1px', minWidth: 90, minHeight: 48 }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="w-full flex items-center justify-center mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <span
              className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-4 px-8 shadow-dark cursor-pointer animate-rotate-once text-lg sm:text-xl"
              style={{ letterSpacing: '1px', minWidth: 220, minHeight: 56, whiteSpace: 'nowrap' }}
            >
              Data Visualization
            </span>
          </motion.div>
        </div>
      ) : (
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            Web & AI/ML
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
