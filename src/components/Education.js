import React from "react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Licon from "./Licon";

const Details = ({ type, time, place, CGPA }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <Licon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}{" "}
        </span>
        <p className="font-medium w-full">{CGPA}</p>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40 -mt-7">
      <h2
        className="font-bold text-8xl mb-32
       w-full text-center"
      >
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top=0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Technology in Computer Science"
            time="2022-Present"
            place="SRM Institute of Science and Technology"
            CGPA="9.93"
          />

          <Details
            type="Higher Secondary School"
            time="2020-2022"
            place="Narbheram Hansraj English School"
            CGPA="94.5%"
          />

          <Details
            type="Secondary School"
            time="2008-2020"
            place="Narbheram Hansraj English School"
            CGPA="90.0%"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
