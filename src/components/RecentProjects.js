import React, { useEffect } from "react";
import { PinContainer } from "./3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: "Generative Pre-Trained Transformer - Teacher",
    des: "An AI Based Learning website where anyone can upload any ppt and can question to our model and can get answers.",
    img: "/img.png",
    iconLists: [
      "/react.png",
      "/GenAi.png",
      "/react.png",
      "/GenAi.png",
      "/react.png",
    ],
    link: "https://www.apple.com/",
  },
  {
    id: 2,
    title: "Generative Pre-Trained Transformer - Teacher",
    des: "An AI Based Learning website where anyone can upload any ppt and can question to our model and can get answers.",
    img: "/img.png",
    iconLists: [
      "/react.png",
      "/GenAi.png",
      "/react.png",
      "/GenAi.png",
      "/react.png",
    ],
    link: "https://www.apple.com/",
  },
  {
    id: 3,
    title: "Generative Pre-Trained Transformer - Teacher",
    des: "An AI Based Learning website where anyone can upload any ppt and can question to our model and can get answers.",
    img: "/img.png",
    iconLists: [
      "/react.png",
      "/GenAi.png",
      "/react.png",
      "/GenAi.png",
      "/react.png",
    ],
    link: "https://www.apple.com/",
  },
  {
    id: 4,
    title: "Generative Pre-Trained Transformer - Teacher",
    des: "An AI Based Learning website where anyone can upload any ppt and can question to our model and can get answers.",
    img: "/img.png",
    iconLists: [
      "/react.png",
      "/GenAi.png",
      "/react.png",
      "/GenAi.png",
      "/react.png",
    ],
    link: "https://www.apple.com/",
  },
];

const RecentProjects = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
  return (
    <>     
      <div className="flex flex-col items-center justify-center p-4 gap-20 mt-0">
        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-8 max-w-full">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              data-aos="flip-down" data-aos-duration="3000" 
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-full max-w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px]  w-full max-w-[80vw] overflow-hidden h-[30vh]  sm:h-[40vh] mb-10 text-white">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#ab5a93] text-white"
                    
                  >
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 w-full h-full object-cover transform rotate-3"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3 text-white">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-black/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center text-white"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple text-white">Check</p>
                    <FaLocationArrow className="ms-3" color="#ab5a93"
                    size={24}/>
                  </div>
                
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
