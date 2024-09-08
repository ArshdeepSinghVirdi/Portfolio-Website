import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg pt-1 pb-2">
      <div className="py-6 flex items-center justify-between pl-6 pr-12">
        <div className="flex items-center text-white">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
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
      </div>
    </footer>
  );
};

export default Footer;
