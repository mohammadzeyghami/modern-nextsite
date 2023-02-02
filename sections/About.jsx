"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import { arrowDown } from "../public";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings}  relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, abount: 0.25 }}
      className={`mx-auto ${styles.innerWidth}  ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{" "}
        <span className="font-extrabold text-white">
          madness of theMetaverse
        </span>{" "}
        of today, using only{" "}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's explore the madness of the metaverse by scrolling down
      </motion.p>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mt-[28px]"
      >
        <Image
          src={arrowDown}
          alt="arrowDown"
          width={18}
          height={18}
          className="w-[18px] h-[28px] object-contain "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
