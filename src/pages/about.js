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
  "Hello! I'm Arshdeep Singh Virdi, a scholar currently pursuing a B.Tech CSE course at SRM Institute of Science and Technology, currently in my 3rd year. Commitment, passion, and innovation are the driving forces that have kept me motivated throughout my journey. I am a diligent individual, highly committed to completing all my work with utmost perfection. I constantly explore and develop skills to be impeccable in the field of technology. My passion for life, coupled with my ardent interest in technology, and my readiness to innovate and embrace change, are what set me apart.  In addition to my academic pursuits, I have a well foundation in web development, with proficiency in several frameworks such as Next.js, React.js, and various animation frameworks. Moreover, I possess knowledge in Flutter and a bit of Generative AI. I also have expertise in Node.js, Express.js, and MongoDB for backend development. I've actively applied my skills by working with a team to develop a project, which ultimately secured the second position in a hackathon held in Chandigarh.  I am enthusiastic about contributing to innovative projects and continually expanding my knowledge in the ever-evolving tech landscape.";

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
