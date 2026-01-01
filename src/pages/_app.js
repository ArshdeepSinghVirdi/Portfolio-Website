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
import Cursor from "../components/MovingCursor/Cursor.jsx";

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
  const [showCursor, setShowCursor] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if counting animation has been shown in this session
    const hasSeenCounting = typeof window !== 'undefined' && sessionStorage.getItem("countingComplete") === "true";
    
    if (router.pathname === "/") {
      // On home page
      if (initialLoad && !hasSeenCounting) {
        // First time loading home page - show counting animation
        const timer = setTimeout(() => {
          setCountingComplete(true);
          setInitialLoad(false);
          setShowCursor(true);
          if (typeof window !== 'undefined') {
            sessionStorage.setItem("countingComplete", "true");
          }
        }, 4000);
        return () => clearTimeout(timer);
      } else {
        // Returning to home page or counting already shown - skip animation
        setCountingComplete(true);
        setShowCursor(true);
        if (initialLoad) {
          setInitialLoad(false);
        }
      }
    } else {
      // Not on home page - show content immediately
      setCountingComplete(true);
      setShowCursor(true);
      if (initialLoad) {
        setInitialLoad(false);
      }
    }
  }, [router.pathname, initialLoad]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };
    checkMobile();
    
    // Debounce resize listener for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // useEffect(() => {
  //   const disableRightClick = (e) => e.preventDefault();
  //   const disableDevTools = (e) => {
  //     if (
  //       (e.ctrlKey && e.shiftKey && e.key === "I") || 
  //       (e.ctrlKey && e.shiftKey && e.key === "C") || 
  //       (e.ctrlKey && e.shiftKey && e.key === "J") || 
  //       (e.ctrlKey && e.key === "U") || 
  //       e.key === "F12" 
  //     ) {
  //       e.preventDefault();
  //       alert("Inspecting is disabled on this site.");
  //     }
  //   };
  //   document.addEventListener("contextmenu", disableRightClick);
  //   document.addEventListener("keydown", disableDevTools);

  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //     document.removeEventListener("keydown", disableDevTools);
  //   };
  // }, []);

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
                  <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
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
        {showCursor && !isMobile && <Cursor />}
      </main>
    </>
  );
}
