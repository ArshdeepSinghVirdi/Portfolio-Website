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
  "Hello! I am Arshdeep Singh Virdi, a passionate Software Development Engineer with a strong foundation in computer science, artificial intelligence, and full-stack development. I completed my Bachelor of Technology (B.Tech.) in Computer Science and Engineering from SRM Institute of Science and Technology, graduating with an outstanding CGPA of 9.72. I am currently working as a Programmer Analyst (Software Development Engineer) at Boeing, where I contribute to building scalable, high-quality software solutions while continuously expanding my technical expertise.Driven by commitment, passion, and innovation, I enjoy solving complex problems and building technology that creates meaningful impact. Throughout my academic journey, I gained valuable industry experience through internships in web development at Eshway and Whizz Communications, where I developed innovative and user-centric applications.I have successfully designed and developed projects such as FinEdge, VigiVault, AI Gallery App, GPT-Teacher, and several AI-powered and full-stack applications, demonstrating expertise in Flutter, Firebase, the MERN stack, Artificial Intelligence, and Machine Learning. I am a lifelong learner who enjoys exploring emerging technologies, continuously improving my skills, and collaborating with talented teams. My goal is to leverage software engineering and AI to build impactful products while growing as a technology professional and contributing to meaningful innovation.";

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
