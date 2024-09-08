import React, { useEffect } from 'react';
import { Inter } from "next/font/google";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/Layout";
import profile from "../../public/Arsh2.png";
import HireMe from "../components/HireMe";

const inter = Inter({ subsets: ["latin"] });

const AnimatedRectangle = ({ imageSrc, width, height }) => (
  <div
    className="rounded-full inline-block overflow-hidden animate-pulse"
    style={{ 
      width, 
      height, 
      perspective: '1000px' 
    }}
  >
    <div
      className="w-full h-full transition-transform duration-500 ease-in-out transform hover:rotate-x-12 hover:rotate-y-12 hover:scale-110"
      style={{ transformStyle: 'preserve-3d' }}  
    >
      <Image
        src={imageSrc}
        alt="Animated Rectangle"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-500 ease-in-out"
      />
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Layout className="pt-0 text-black">
      <div className="flex flex-col min-h-screen">
        <header className="mb-8">
          <div>
            <Image src={profile} alt="Arsh" className="w-20 h-25" />
          </div>
        </header>

        <main className="flex-grow">
          <div className="mb-8 flex justify-start items-center pl-20 pt-0" data-aos="fade-up">
            <h1 className="text-9xl font-bold mr-10 tracking-wide text-white"> 
              WEBFLOW
            </h1>
            <AnimatedRectangle
              imageSrc="/Capsule1.png"  
              width="250px"
              height="110px"
            />
          </div>

          <div
            className="mb-8 flex justify-center items-center pt-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <AnimatedRectangle
              imageSrc="/Capsule2.png"  
              width="260px"
              height="110px"
              className="relative left-10" 
            />
            <h1 className="text-9xl font-bold ml-12 tracking-wide text-white"> 
              DEVELOPER
            </h1>
          </div>

          <div
            className="flex justify-center items-center pt-4"
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <h1 className="text-9xl font-bold ml-16 tracking-wide text-white"> 
              WEB
            </h1>
            <AnimatedRectangle
              imageSrc="/Capsule3.png"  
              width="250px"
              height="110px"
            />
            <h1 className="text-9xl font-bold ml-5 tracking-wide text-white"> 
              DESIGNER
            </h1>
          </div>
        </main>
      </div>
      <HireMe />
    </Layout>
  );
}
