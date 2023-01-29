import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Kv = () => {
  const [animationEnd, setAnimationEnd] = useState(false);
  const moveIn = {
    initial: {
      opacity: 0,
      y: "30px",
    },
    animate: {
      opacity: 1,
      y: "0px",
    },
  };
  const zoomIn = {
    initial: {
      opacity: 0,
      clipPath: "circle(0% at 10% 30%)",
    },
    animate: {
      opacity: 0.4,
      clipPath: "circle(150% at 20% 0%)",
    },
  };
  return (
    <div className="h-screen mx-auto relative overflow-hidden">
      <>
        <motion.div
          className="relative z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-left-bottom"
          variants={zoomIn}
          initial={"initial"}
          animate={"animate"}
          transition={{ duration: 1.5, ease: [0.2, 0.05, -0.01, 0.9] }}
          style={{ width: "100vw", height: "100vh" }}
        >
          <Image
            src="/kvimg.webp"
            alt="kv"
            fill
            sizes="100vw"
            priority
            className="brightness-60 object-cover"
          />
        </motion.div>
        <motion.div className="kv_title md:ml-24 text-right w-full p-4 box-border md:p-0 md:w-auto">
          <motion.div
            variants={moveIn}
            initial="initial"
            animate="animate"
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            Life
            <motion.div
              className="ml-2 inline-block text-4xl md:text-6xl"
              variants={moveIn}
              initial="initial"
              animate="animate"
              transition={{
                duration: 1.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
            >
              with
            </motion.div>
          </motion.div>
          <motion.span
            className="mb-4 inline-block"
            variants={moveIn}
            initial="initial"
            animate="animate"
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => {
              setAnimationEnd(true);
            }}
          >
            Creative
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationEnd && { opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="kv_sub font-rodin leading-relaxed"
          >
            <p>クリエイティブに生きたい</p>
            <p>そんな僕の表現の入口</p>
          </motion.div>
        </motion.div>
      </>
    </div>
  );
};
export default Kv;
