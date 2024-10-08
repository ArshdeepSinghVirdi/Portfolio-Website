"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";
import AOS from "aos";
import "aos/dist/aos.css";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
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
                            className="dark:text-white text-black opacity-0"
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
            <div className="mt-4">
                <div data-aos="fade-down" data-aos-duration="3000" className=" dark:text-white text-black text-xl leading-snug tracking-wide font-medium">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
