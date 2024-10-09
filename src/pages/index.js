import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
import profile from "../../public/Arsh2.png";
import HireMe from "../components/HireMe";

const inter = Inter({ subsets: ["latin"] });

const AnimatedRectangle = ({ imageSrc, width, height, className = "" }) => (
  <div
    className={`rounded-full inline-block overflow-hidden animate-pulse ${className}`}
    style={{
      width,
      height,
      perspective: "1000px",
    }}
  >
    <div
      className="w-full h-full transition-transform duration-500 ease-in-out transform hover:rotate-x-12 hover:rotate-y-12 hover:scale-110"
      style={{ transformStyle: "preserve-3d" }}
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
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveClasses = () => {

    if (windowWidth >= 1024) {
      return {
        fontSize: 'text-9xl',
        imageWidth: '250px',
        imageHeight: '110px',
        spacing: 'mb-8',
        padding: 'pl-20',
      };
    } else if (windowWidth >= 768) {
      return {
        fontSize: 'text-8xl',
        imageWidth: '260px',
        imageHeight: '120px',
        spacing: 'mb-7',
        padding: 'pl-10',
      };
    }
    else if (windowWidth >= 625) {
      return {
        fontSize: 'text-7xl',
        imageWidth: '240px',
        imageHeight: '110px',
        spacing: 'mb-5',
        padding: 'pl-6',
      };
    }
    else if (windowWidth >= 500) {
      return {
        fontSize: 'text-6xl',
        imageWidth: '220px',
        imageHeight: '102px',
        spacing: 'mb-5',
        padding: 'pl-6',
      };
    }
    else {
      return {
        fontSize: 'text-5xl',
        imageWidth: '200px',
        imageHeight: '90px',
        spacing: 'mb-4',
        padding: 'pl-4',
      };
    }
  };

  const { fontSize, imageWidth, imageHeight, spacing, padding } = getResponsiveClasses();

  return (
    <Layout className="pt-0 text-black">
      <div className="flex flex-col min-h-screen">
        <header className="mb-8">
          <div>
            <Image src={profile} alt="Arsh" className="w-16 h-20 md:w-20 md:h-25" />
          </div>
        </header>

        <main className="flex-grow">
          <div
            className={`${spacing} flex flex-col lg:flex-row justify-start items-center ${padding} pt-0`}
            data-aos="fade-up"
          >
            <h1 className={`${fontSize} font-bold tracking-wide text-white mb-4 lg:mb-0 lg:mr-10`}>
              WEBFLOW
            </h1>
            <AnimatedRectangle
              imageSrc="/Capsule1.png"
              width={imageWidth}
              height={imageHeight}
            />
          </div>

          <div
            className={`${spacing} flex flex-col lg:flex-row justify-center items-center pt-4`}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h1 className={`${fontSize} font-bold tracking-wide text-white mb-4 lg:mb-0 lg:hidden`}>
              DEVELOPER
            </h1>
            <AnimatedRectangle
              imageSrc="/Capsule2.png"
              width={imageWidth}
              height={imageHeight}
              className="mb-4 lg:mb-0 lg:mr-12"
            />
            <h1 className={`${fontSize} font-bold tracking-wide text-white hidden lg:block`}>
              DEVELOPER
            </h1>
          </div>

          <div
            className={`flex flex-col lg:flex-row justify-center items-center pt-4`}
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <h1 className={`${fontSize} font-bold tracking-wide text-white mb-4 lg:mb-0 lg:mr-1`}>
              WEB
            </h1>
            <AnimatedRectangle
              imageSrc="/Capsule3.png"
              width={imageWidth}
              height={imageHeight}
              className="mb-4 lg:mb-0 lg:mx-5"
            />
            <h1 className={`${fontSize} font-bold tracking-wide text-white -mr-8`}>
              DESIGNER
            </h1>
          </div>
        </main>
      </div>
      <HireMe />
    </Layout>
  );
}

