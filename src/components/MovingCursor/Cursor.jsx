import React, { useEffect } from 'react'
import { useState } from 'react';
import {motion} from 'framer-motion'
import styles from "./style.module.scss";

const Cursor = () => {
    const [position,setPosition] = useState({x:0,y:0})

    useEffect(()=>{
        const mouseMove = (e) =>{
            setPosition({x:e.clientX,y:e.clientY})
        }

        window.addEventListener("mousemove",mouseMove);

        return()=>{
            window.removeEventListener("mousemove",mouseMove);
        };
    },[]);
 
  return (
    <motion.div 
    className={styles.cursor}
    animate={{x: position.x+10 , y: position.y+10}}
    >
      Cursor
    </motion.div>
  )
}

export default Cursor
