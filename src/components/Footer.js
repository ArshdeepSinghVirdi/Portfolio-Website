import React, { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg pt-1 pb-2 sm:text-base">
      <div className={`py-6 flex flex-col md:flex-row items-center ${isMobile ? 'justify-center px-0' : 'justify-between pl-6 pr-12'}`}>
        {isMobile ? (
          <div className="w-full flex items-center justify-center text-white">
            <div className="flex items-center justify-center w-full">
              Built with{" "}
              <span className="text-primary text-2xl px-1">&#9825;</span> by&nbsp;
              <Link
                href="/"
                className="underline underline-offset-2"
                target={"_blank"}
              >
                Arshdeep Singh
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center text-white lg:flex-col lg:py-2 mb-2 md:mb-0">
              <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            </div>
            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 text-center mb-2 md:mb-0">
              <div className="flex items-center text-white">
                Built with{" "}
                <span className="text-primary text-2xl px-1">&#9825;</span> by&nbsp;
                <Link
                  href="/"
                  className="underline underline-offset-2"
                  target={"_blank"}
                >
                  Arshdeep Singh
                </Link>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Link
                href="/"
                className="underline underline-offset-2"
                target={"_blank"}
              >
                Bonjour Tout
              </Link>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
