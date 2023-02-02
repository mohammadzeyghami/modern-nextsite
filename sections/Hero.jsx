"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { cover, stamp } from "../public/index";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
const Hero = () => (
  <section className={`${styles.yPaddings}sm:pl-16 pl-6 `}>
    <motion.div
      variants={staggerContainer}
      initial="hiiden"
      whileInView="show"
      viewport={{ once: false, amout: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          className={styles.heroHeading}
          variants={textVariant(1.1)}
          initial="hidden"
          whileInView="show"
        >
          Metaverse
        </motion.h1>
        <motion.div
          className="flex flex-row justify-center items-center"
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText}></div>
          <h1 className={styles.heroHeading}>ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradiant rounded-tl-[140px] z-[0] -top-[30px]" />
        <Image
          src={cover}
          height={350}
          alt="cover"
          className="w-full sm:h-[500px]  object-cover rounded-tl-[140px] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-start sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <Image
              src={stamp}
              width={100}
              height={100}
              alt="stamp"
              className="sm:w-[155px] sm:h-[100px] object-contain"
            ></Image>
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
