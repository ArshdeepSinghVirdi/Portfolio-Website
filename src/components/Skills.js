import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl  w-full text-center py-20">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-14vw" y="2vw" />
        <Skill name="Javascript" x="-12vw" y="-10vw" />
        <Skill name="ReactJs" x="20vw" y="6vw" />
        <Skill name="NextJs" x="0vw" y="12vw" />
        <Skill name="NodeJs" x="-23vw" y="-15vw" />
        <Skill name="ExpressJs" x="15vw" y="-14vw" />
        <Skill name="MongoDB" x="36vw" y="-5vw" />
        <Skill name="Flutter" x="0vw" y="-20vw" />
        <Skill name="Material UI" x="-27vw" y="18vw" />
        <Skill name="Framer Motion" x="-42vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="15vw" y="18vw" />
        <Skill name="Git/Github" x="20vw" y="-5vw" />
        <Skill name="Gen AI" x="43vw" y="5vw" />
        <Skill name="AutoCad" x="-30vw" y="2vw" />
      </div>
    </>
  );
};

export default Skills;
