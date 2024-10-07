import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import useScrollDirection from "./useScrollDirection";

const Skill = ({ name, x, y, controls }) => {
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

const Skills = () => {
  const controls = useAnimation();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (scrollDirection === "down" || scrollDirection === "up") {
      controls.start({ x: 0, y: 0 });
      controls.start({
        x: [0, 0],
        y: [0, 0],
        transition: { duration: 1.5 },
      });
    }
  }, [scrollDirection, controls]);

  return (
    <>
      <h2 className="font-bold text-6xl md:text-8xl w-full text-center py-12 md:py-20 text-white">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-14vw" y="2vw" controls={controls} />
        <Skill name="Javascript" x="-12vw" y="-10vw" controls={controls} />
        <Skill name="ReactJs" x="20vw" y="6vw" controls={controls} />
        <Skill name="NextJs" x="0vw" y="12vw" controls={controls} />
        <Skill name="NodeJs" x="-23vw" y="-15vw" controls={controls} />
        <Skill name="ExpressJs" x="15vw" y="-14vw" controls={controls} />
        <Skill name="MongoDB" x="36vw" y="-5vw" controls={controls} />
        <Skill name="Flutter" x="0vw" y="-20vw" controls={controls} />
        <Skill name="Material UI" x="-27vw" y="18vw" controls={controls} />
        <Skill name="Framer Motion" x="-42vw" y="-5vw" controls={controls} />
        <Skill name="Tailwind CSS" x="15vw" y="18vw" controls={controls} />
        <Skill name="Git/Github" x="20vw" y="-5vw" controls={controls} />
        <Skill name="Gen AI" x="43vw" y="5vw" controls={controls} />
        <Skill name="AutoCad" x="-30vw" y="2vw" controls={controls} />
      </div>
    </>
  );
};

export default Skills;
