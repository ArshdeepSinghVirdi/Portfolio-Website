import React, { useEffect, useState } from "react";
import Link from 'next/link'

const HireMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <div className="fixed -left-7 -bottom-2 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center">
        <img
          className='animate-spin-slow'
          src="/Text.png"
          alt="Circular Image"
          height="195"
          width="195"
        />
        <Link href="mailto:arshdeepsingh92283@gmail.com" className="flex items-center justify-center absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-customRGB text-dark shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark">Hire Me</Link>
      </div>
    </div>
  );
};

export default HireMe;
