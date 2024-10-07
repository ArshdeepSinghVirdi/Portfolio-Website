import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from "./style.module.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };


    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener("mousemove", mouseMove);

    const textElements = document.querySelectorAll("a, p, h1, h2, h3, h4, h5, h6, span");
    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        left: `${position.x - 25}px`,  
        top: `${position.y - 25}px`,
      }}
      animate={{
        scale: hovered ? 1.8 : 1,  
        opacity: hovered ? 0.8 : 1,  
        borderWidth: hovered ? 4 : 2,  
      }}
      transition={{ duration: 0.1, ease: "easeOut" }} 
    >
      <div className={styles.innerCircle}></div>
    </motion.div>
  );
};

export default Cursor;
