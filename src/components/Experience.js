import React from 'react'
import {useScroll,motion} from "framer-motion"
import { useRef } from 'react'
import Licon from './Licon'

const Details = ({position,company,companyLink,work,time}) =>{
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <Licon reference={ref}/>
    <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}>
      <h3 className='capitalize font-bold text-2xl'>
        {position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize'>@{company} </a></h3>
        <span className='capitalize font-medium text-dark/75'>
          {time}
        </span>
        <p className='font-medium w-full'>
          {work}
        </p>
    </motion.div>
  </li>
}
const Experience = () => {
  const ref = useRef(null);
  const{scrollYProgress} = useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )
  return (
    <div className='my-40'>
      <h2 className='font-bold text-8xl mb-32
       w-full text-center'>Experience</h2>
      <div ref={ref}className='w-[75%] mx-auto relative'>
        <motion.div  
        style={{scaleY:scrollYProgress}}
        className='absolute left-9 top=0 w-[4px] h-full bg-dark origin-top'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details position="Web Development Intern" company="Eshway" time="August 2023 - October 2023"work="I've recently completed two impactful projects in my current role. In one, I served as a full-stack developer, contributing to both frontend and backend aspects. The second project focused on React.js, where I led frontend development, creating efficient and user-friendly interfaces. These experiences have enriched my skill set and deepened my understanding of both full-stack development and frontend specialization. Excited to apply these skills in future endeavors." companyLink="https://eshway.com/"/>

          <Details position="Freelance Web Development Intern" company="Whizz Communication" time="May 2024" companyLink="https://www.jpmorgan.com/global"/>

          <Details position="Internshala Student Partner & Training Captain" company="Internshala" time="June 2023 - July 2023"work="As an Internshala Student Partner, I dedicated my efforts to promoting their courses. Successfully completing my tasks not only resulted in substantial cash rewards but also earned me valuable in-kind rewards. This experience enhanced my skills in marketing and promotion while offering tangible recognition for my contributions." companyLink="https://internshala.com/"/>
        </ul>
      </div>
    </div>
  )
}

export default Experience
