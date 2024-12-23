"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // Remove if your container is not fixed height
    offset: ["start start", "end start"], // Remove if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={classNames(
        "h-[40rem] items-start overflow-y-auto w-full",
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-2 sm:grid-cols-3 items-start max-w-5xl mx-auto gap-2 sm:gap-5 "
        ref={gridRef}
      >
        {/* First Column */}
        {firstPart.map((el, idx) => (
          <motion.div
            style={{ y: translateFirst }}
            key={"grid-1" + idx}
            className="relative"
          >
            <img
              src={el}
              className="h-32 w-full object-cover object-center rounded-lg"
              alt="thumbnail"
            />
          </motion.div>
        ))}

        {/* Second Column */}
        {secondPart.map((el, idx) => (
          <motion.div
            style={{ y: translateSecond }}
            key={"grid-2" + idx}
            className="relative"
          >
            <img
              src={el}
              className="h-32 w-full object-cover object-center rounded-lg"
              alt="thumbnail"
            />
          </motion.div>
        ))}

        {/* Third Column */}
        {thirdPart.map((el, idx) => (
          <motion.div
            style={{ y: translateThird }}
            key={"grid-3" + idx}
            className="relative"
          >
            <img
              src={el}
              className="h-32 w-full object-cover object-center rounded-lg"
              alt="thumbnail"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
