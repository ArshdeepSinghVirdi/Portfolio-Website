import React, { useState,useEffect } from 'react'
import CountUp from "react-countup";
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from "./FadeIn"


const countingStyles = {
  color: 'white',
  fontSize: '40px'
};

const Counting = () => {

  const [countingComplete, setCountingComplete] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleCountingFinish = () => {
    setCountingComplete(true);
  };
  const handleTextAnimationComplete = () => {
    setTextAnimationComplete(true);
  };

  useEffect(() => {
    if (textAnimationComplete && !animationComplete) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [textAnimationComplete, animationComplete]);


  const pageVariants = {
    initial: { y: 0 },
    animate: { y: '-100vh', transition: { duration: 1.5, ease: 'easeInOut' } }
  };

  return (
    <AnimatePresence>
      {!animationComplete && (
        <motion.div
          className="z-10 flex items-center justify-center h-screen bg-black"
          initial="initial"
          animate={countingComplete ? 'animate' : 'initial'}
          variants={pageVariants}
        >
          {countingComplete ? (
            <FadeIn />
          ) : (
            <CountUp end={100} duration={2} style={countingStyles} onEnd={handleCountingFinish} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Counting

