import React from "react";
import Head from "next/head";
import Image from "next/image";
import Project from "../components/RecentProjects";
import { TextGenerateEffects } from "../components/TextAnimation";
import TransitionEffect from "../components/TransitionEffect";
import profile from "../../public/Arsh2.png"; 


const project = () => {
  const word = "Imagination Triumphs Knowledge!";
  return (
    <>
      <Head>
        <title>Arshdeep Singh | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <div className="flex w-full flex-col items-center justify-center px-10">
        <div className="absolute top-0 left-3">
          <Image src={profile} alt="Arsh" className="w-20 h-25" />
        </div>
        <div>
          <TextGenerateEffects word={word} />
        </div>
        <Project />
      </div>
    </>
  );
};

export default project;
