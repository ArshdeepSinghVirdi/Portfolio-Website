import "../styles/globals.css";
import styles from "../styles/style.module.scss";
import { Modern_Antiqua } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Counting from "../components/Counting";
import Navbar from "../components/Button/index.jsx";
import Nav from "../components/Nav/index.jsx";
import { AnimatePresence, motion } from "framer-motion";
import { AuroraBackground } from "../components/AuroraBg.tsx";

const variants = {
  open: {
    width: 400,
    height: 480,
    top: "-20px",
    right: "-20px",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

const modern = Modern_Antiqua({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  const [countingComplete, setCountingComplete] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/" && initialLoad) {
      const isCountingComplete = sessionStorage.getItem("countingComplete");
      if (isCountingComplete) {
        setCountingComplete(true);
        setInitialLoad(false);
      } else {
        const timer = setTimeout(() => {
          setCountingComplete(true);
          setInitialLoad(false);
          sessionStorage.setItem("countingComplete", "true");
        }, 4000);

        return () => clearTimeout(timer);
      }
    } else {
      setCountingComplete(true);
    }
  }, [initialLoad, router.pathname]);

  useEffect(() => {
    if (router.asPath === "/") {
      setCountingComplete(false);
      setInitialLoad(true);
      sessionStorage.removeItem("countingComplete");
    }
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Arshdeep's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Arsh2.ico" />
      </Head>
      <main
        className={`${modern.variable} font-mont bg-light w-full min-h-screen`}
      >
        {!countingComplete && router.pathname === "/" ? (
          <Counting />
        ) : (
          <>
            <AuroraBackground />
            <div>
              <div className={styles.header}>
                <motion.div
                  className={styles.menu}
                  variants={variants}
                  animate={isActive ? "open" : "closed"}
                  initial="closed"
                >
                  <AnimatePresence>
                    {isActive && <Nav />}
                  </AnimatePresence>
                </motion.div>
                <Navbar isActive={isActive} setIsActive={setIsActive} />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={router.asPath}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
              <Footer />
            </div>
          </>
        )}
      </main>
    </>
  );
}
