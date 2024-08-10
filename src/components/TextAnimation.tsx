"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";
import AOS from "aos";
import "aos/dist/aos.css";

export const TextGenerateEffects = ({
    word,
    className,
}: {
    word: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = word.split(" ");
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 3,
                delay: stagger(0.05),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-black text-black opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-20">
                <div data-aos="zoom-in-up" data-aos-duration="3000" className=" dark:text-white text-black  leading-snug tracking-wide  text-center font-bold text-8xl pt-10 ">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
