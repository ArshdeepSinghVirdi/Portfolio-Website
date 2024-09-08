import React, { useState, useRef } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const borderAnimation = {
  rest: {
    border: "2px solid rgba(195, 101, 170, 0.3)",
    boxShadow: "0 0 5px rgba(195, 101, 170, 0.2)",
  },
  hover: {
    border: "2px solid rgb(195, 101, 170)",
    boxShadow: "0 0 10px rgba(195, 101, 170, 0.5)",
    transition: { duration: 0.3 },
  },
  hoverButton: {
    backgroundColor: "rgb(189, 31, 153)",
    color: "white",
    boxShadow:
      "0 0 5px rgba(189, 31, 153, 0.2), 0 0 25px rgba(189, 31, 153, 0.2), 0 0 50px rgba(189, 31, 153, 0.2), 0 0 200px rgba(189, 31, 153, 0.2) ",
  },
};

const Contact = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState(null);
  const [isError, setIsError] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7spi14m", 
        "template_g9auvzj", 
        formRef.current,
        "KcWgpOkAVSOw3yfA1" 
      )
      .then(
        () => {
          setStatusMessage("Successfully Sent");
          setIsError(false); 
        },
        (error) => {
          setStatusMessage("Error Occurred");
          setIsError(true); 
        }
      );
  };

  return (
    <motion.div
      className={styles.contact}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className={styles.textContainer} variants={variants}>
        <motion.h1 className={styles.h1} variants={variants}>
          Let's{" "}
          <span style={{ color: "rgb(195, 101, 170)", fontWeight: "bold" }}>
            {" "}
            Work{" "}
          </span>{" "}
          Together
        </motion.h1>
        <motion.div className={styles.item} variants={variants}>
          <h2 style={{ color: "rgb(195, 101, 170)", fontWeight: "bold" }}>
            Mail
          </h2>
          <span style={{ color: "#d3d3d3" }}>
            arshdeepsingh92283@gmail.com
          </span>
        </motion.div>
        <motion.div className={styles.item} variants={variants}>
          <h2 style={{ color: "rgb(195, 101, 170)", fontWeight: "bold" }}>
            Address
          </h2>
          <span style={{ color: "#d3d3d3" }}>Jamshedpur, Jugsalai</span>
        </motion.div>
        <motion.div className={styles.item} variants={variants}>
          <h2 style={{ color: "rgb(195, 101, 170)", fontWeight: "bold" }}>
            Phone
          </h2>
          <span style={{ color: "#d3d3d3" }}>9835124760</span>
        </motion.div>
      </motion.div>

      <div className={styles.formContainer}>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className={styles.form}
        >
          <motion.input
            type="text"
            required
            placeholder="Name"
            name="name"
            variants={borderAnimation}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            className={styles.input}
          />
          <motion.input
            type="email"
            required
            placeholder="Email"
            name="email"
            variants={borderAnimation}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            className={styles.input}
          />
          <motion.textarea
            rows={7}
            placeholder="Message"
            name="message"
            variants={borderAnimation}
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            className={styles.textarea}
          />
          <motion.button
            type="submit"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            variants={borderAnimation}
            initial="rest"
            whileHover="hoverButton"
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.5,
            }}
            style={{
              scale: 1,
            }}
          >
            <motion.span
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
              variants={borderAnimation}
            />
            <span
              className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
              style={{
                backgroundColor: "rgb(195, 101, 170)",
                color: "black",
                fontSize: "17px",
              }}
            >
              Submit
            </span>
          </motion.button>
        </motion.form>
        {statusMessage && (
          <p style={{ color: isError ? "red" : "Green",padding: "15px",marginTop: "15px"}}>{statusMessage}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
