import React, { useState } from "react";
import { Links, FooterLinks } from "./data";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.5 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
  },
};

export default function Index() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggleButton}
      >
        {/* {isOpen ? "CLOSE" : "OPEN"} */}
      </button>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <div key={i} className={styles.linkContainer}>
              <motion.div
                key={i}
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <a href={link.href}>{link.title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {FooterLinks.map((link, i) => {
          return (
            <motion.a
              href={link.href}
              key={`f_${i}`}
              variants={slideIn}
              custom={i}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
