import React from "react";
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className="fixed right-4 bottom-0 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center">
        <img
          className='animate-spin-slow'
          src="/Circular_Text.png"
          alt="Circular Image"
        />
        <Link href="mailto:arshdeepsingh92283@gmail.com" className="flex items-center justify-center absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-customRGB text-dark shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark">Hire Me</Link>
      </div>
    </div>
  );
};

export default HireMe;
