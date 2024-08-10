import React from "react";
import Head from "next/head";
import Project from "../components/RecentProjects";
import { TextGenerateEffects } from "../components/TextAnimation";
import TransitionEffect from "../components/TransitionEffect";

const project = () => {
  const word = "Imagination Truimps Knowledge!";
  return (
    <>
      <Head>
        <title>Arshdeep Singh | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <div className="flex w-full flex-col items-center justify-center px-10">
        <div>
          <TextGenerateEffects word={word} />
        </div>
        <Project />
      </div>
    </>
  );
};

export default project;
