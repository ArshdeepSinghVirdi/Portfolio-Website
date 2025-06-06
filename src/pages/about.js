import React, { useEffect, useState } from "react";
import Head from "next/head";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Image from "next/image";
import { TextGenerateEffect } from "../components/TextGeneration";
import { TextGenerateEffects } from "../components/TextAnimation";
import TransitionEffect from "../components/TransitionEffect";
import profile from "../../public/Arsh2.png";

const words =
  "Hello! I am Arshdeep Singh Virdi, a passionate and driven individual committed to excellence in every endeavor. Currently, I am pursuing a Bachelor of Technology in Computer Science and Engineering (CSE) at SRM Institute of Science and Technology, where I maintain an impressive CGPA of 9.84 as a final year student. Commitment, Passion, and Innovation, these three principles have consistently fueled my journey. My curiosity and enthusiasm for technology motivate me to explore cutting-edge solutions and create impactful projects. Some of my notable experiences include internships in web development, where I developed innovative solutions for companies such as Eshway and Whizz Communications. I have also spearheaded projects like the AI Gallery App and the Generative PreTrained Transformer - Teacher, showcasing expertise in Flutter, Firebase, AI integration, and MERN stack technologies. With my team, I proudly secured 2nd place in the Innosprint D4 Hackathon at CGC College, demonstrating my problem-solving skills and collaborative mindset in high-pressure environments. As a diligent learner and leader, I hold key roles, such as being the Chairperson at GeeksForGeeks SRMIST Chapter and the Joint Secretary of the Student Council, further demonstrating my ability to balance academics, leadership, and passion for community building. Through hard work and a relentless drive to innovate, I aim to make a meaningful impact in the tech field. My skills in programming languages, web development, AI and ML and various designing tools reflect my readiness to excel and adapt to evolving technologies. I look forward to opportunities where I can contribute creatively while growing as a professional in this dynamic field.";

const About = () => {
  const word = "Passion Fuels Purpose!";
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Arshdeep Singh | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <div className="flex w-full flex-col items-center justify-center lg:px-10">
        <div className="absolute top-0 left-3">
          <Image src={profile} alt="Arsh" className="w-20 h-25" />
        </div>
        {isClient && (
          <div>
            <TextGenerateEffects word={word} className="text-white" />
          </div>
        )}

        <div className="my-10 mt-20 flex justify-center">
          <div className="relative w-3/4 sm:w-3/4 p-2 lg:p-4 shadow-xl rounded-md transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-[-2px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 rounded-xl"
              style={{
                backgroundImage: 'url("/bg3.png")',
                backgroundColor: "black",
              }}
            ></div>
            <div className="relative p-5 bg-black bg-opacity-80 rounded-md">
              <h2 className="text-3xl font-bold mb-3 text-white text-center">
                A <span style={{ color: "rgb(195, 101, 170)" }}> Glimpse</span>{" "}
                Of Me
              </h2>
              {isClient && (
                <p className="mb-3 text-lg text-white">
                  <TextGenerateEffect words={words} />
                </p>
              )}
            </div>
          </div>
        </div>

        <Skills />
        <Experience />
        <Education />
      </div>
    </>
  );
};

export default About;
