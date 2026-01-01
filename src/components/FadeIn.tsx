import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

const FadeIn: React.FC = () => {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={fadeInVariants} 
      className="text-4xl text-white whitespace-nowrap px-4"
      style={{
        fontSize: 'clamp(1.25rem, 4vw, 2.25rem)'
      }}
    >
      Hey, I am Arshdeep Singh Virdi
    </motion.div>
  );
};

export default FadeIn;
